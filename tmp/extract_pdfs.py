from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from pypdf import PdfReader
import pypdfium2 as pdfium


def extract(pdf_path: Path, output_dir: Path) -> None:
    reader = PdfReader(str(pdf_path))
    pages = []
    for index, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        pages.append({"page": index, "text": text})

    json_path = output_dir / f"{pdf_path.stem}.json"
    json_path.write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding="utf-8")

    document = pdfium.PdfDocument(str(pdf_path))
    thumbs = []
    for index in range(len(document)):
        bitmap = document[index].render(scale=0.55)
        image = bitmap.to_pil().convert("RGB")
        image.thumbnail((360, 260))
        tile = Image.new("RGB", (380, 300), "white")
        tile.paste(image, ((380 - image.width) // 2, 24))
        draw = ImageDraw.Draw(tile)
        draw.text((12, 6), f"Page {index + 1}", fill="#17233c")
        thumbs.append(tile)

    for sheet_index in range(0, len(thumbs), 12):
        batch = thumbs[sheet_index : sheet_index + 12]
        rows = (len(batch) + 3) // 4
        sheet = Image.new("RGB", (4 * 380, rows * 300), "#dfe5ef")
        for tile_index, tile in enumerate(batch):
            x = (tile_index % 4) * 380
            y = (tile_index // 4) * 300
            sheet.paste(tile, (x, y))
        first = sheet_index + 1
        last = sheet_index + len(batch)
        sheet.save(output_dir / f"{pdf_path.stem}-pages-{first:02d}-{last:02d}.jpg", quality=88)

    print(f"{pdf_path.name}: {len(pages)} pages -> {json_path}")


def main() -> None:
    output_dir = Path(sys.argv[1])
    output_dir.mkdir(parents=True, exist_ok=True)
    for raw_path in sys.argv[2:]:
        extract(Path(raw_path), output_dir)


if __name__ == "__main__":
    main()

# UI Component Structure (Wajib)

Dokumen ini menetapkan struktur folder dan pola ekspor untuk setiap komponen UI agar konsisten, mudah dicari, dan scalable di monorepo.

## Struktur Folder

Setiap komponen UI wajib mengikuti pola berikut:

```text
components/
  NamaComponent/
    NamaComponent.tsx
    index.tsx
```

## Aturan Penamaan

- Nama folder dan file mengikuti PascalCase: `Breadcrumbs/`, `Breadcrumbs.tsx`.
- File utama komponen selalu bernama sama dengan foldernya.
- `index.tsx` hanya bertugas sebagai entry point re-export untuk komponen tersebut.

## Aturan Export

- Komponen utama wajib menggunakan named export.
- `index.tsx` wajib me-re-export komponen utama dan type yang relevan.

Contoh:

`components/Breadcrumbs/Breadcrumbs.tsx`

```tsx
export type BreadcrumbsProps = { className?: string };

export function Breadcrumbs(props: BreadcrumbsProps) {
  return null;
}
```

`components/Breadcrumbs/index.tsx`

```tsx
export { Breadcrumbs } from "./Breadcrumbs";
export type { BreadcrumbsProps } from "./Breadcrumbs";
```

## Aturan Import (Rekomendasi)

- Untuk penggunaan lintas aplikasi/paket, gunakan Barrel Export dari `packages/ui/src/index.ts`.
- Hindari import langsung ke file internal selain entry point yang disediakan.


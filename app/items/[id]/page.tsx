import type { Metadata } from 'next';
import { seedKits, getKitById } from '@/data/seed-kits';
import { KitDetailView } from '@/components/kits/KitDetailView';

export async function generateStaticParams() {
  return seedKits.map((kit) => ({ id: kit.id }));
}

export async function generateMetadata(
  props: PageProps<'/items/[id]'>
): Promise<Metadata> {
  const { id } = await props.params;
  const kit = getKitById(id);
  if (!kit) {
    return { title: 'Kit Details' };
  }
  return {
    title: kit.title,
    description: kit.shortDescription,
  };
}

export default async function ItemDetailPage(
  props: PageProps<'/items/[id]'>
) {
  const { id } = await props.params;
  const kit = getKitById(id);

  return <KitDetailView initialKit={kit} id={id} />;
}

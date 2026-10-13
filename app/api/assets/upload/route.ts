import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const targetName = formData.get('target') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'Fichier manquant' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const publicDir = path.join(process.cwd(), 'public');
    const imagesDir = path.join(publicDir, 'images');

    // Assurer l'existence du dossier public/images
    await fs.mkdir(imagesDir, { recursive: true });

    let destPath = '';
    const safeName = targetName || file.name;

    if (safeName === 'logo.png' || safeName === 'logo') {
      destPath = path.join(publicDir, 'logo.png');
      await fs.writeFile(destPath, buffer);
    } else if (safeName.includes('hero') || safeName.includes('4782')) {
      destPath = path.join(imagesDir, 'mascot-hero.jpg');
      await fs.writeFile(destPath, buffer);
      await fs.writeFile(path.join(imagesDir, 'mascot-hero.png'), buffer);
    } else if (safeName.includes('urgence')) {
      destPath = path.join(imagesDir, 'mascot-urgence.jpg');
      await fs.writeFile(destPath, buffer);
      await fs.writeFile(path.join(imagesDir, 'mascot-urgence.png'), buffer);
    } else if (safeName.includes('devis') || safeName.includes('49C59DC0')) {
      destPath = path.join(imagesDir, 'mascot-devis.jpg');
      await fs.writeFile(destPath, buffer);
      await fs.writeFile(path.join(imagesDir, 'mascot-devis.png'), buffer);
    } else {
      destPath = path.join(imagesDir, file.name);
      await fs.writeFile(destPath, buffer);
    }

    return NextResponse.json({ success: true, path: destPath, size: buffer.length });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 });
  }
}

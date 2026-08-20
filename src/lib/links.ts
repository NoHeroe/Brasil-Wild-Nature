import { site } from '../config/site';

/** Monta um link wa.me com mensagem pré-preenchida. Vazio se não há número. */
export function waLink(message: string): string {
  const digits = site.contact.whatsapp.replace(/\D/g, '');
  if (!digits) return '';
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Link mailto (vazio se não há e-mail). */
export function mailLink(subject?: string): string {
  const email = site.contact.email.trim();
  if (!email) return '';
  return `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}

/** URL do Instagram (vazio se não configurado). */
export function instagramLink(): string {
  const user = site.contact.instagram.replace(/^@/, '').trim();
  return user ? `https://www.instagram.com/${user}/` : '';
}

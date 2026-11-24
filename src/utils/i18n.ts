export function translate(key: string, variables?: Record<string, string | number>): string {
  const translations: Record<string, string> = {
    'common.all': 'All',
    'common.pending': 'Pending',
    'common.approved': 'Approved',
    'common.rejected': 'Rejected',
    'common.download': 'Download',
    'notifications.unread_plural': '{count} unread',
    'notifications.unread_singular': '1 unread',
  };
  let text = translations[key] || key;
  if (variables) {
    for (const [k, v] of Object.entries(variables)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    }
  }
  return text;
}

export function icuPlural(count: number, singular: string, plural: string): string {
  return count === 1 ? singular.replace('{count}', '1') : plural.replace('{count}', String(count));
}

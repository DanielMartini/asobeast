import { describe, expect, it } from 'vitest';

import { storefrontLanguage } from './languages';

describe('storefrontLanguage', () => {
  it.each([
    ['pl', 'pl'],
    ['US', 'en'],
    ['jp', 'ja'],
  ])('maps %s to %s', (country, language) => {
    expect(storefrontLanguage(country)).toBe(language);
  });

  it.each([
    ['uy', 'es'],
    ['pe', 'es'],
    ['do', 'es'],
    ['be', 'nl'],
    ['lu', 'fr'],
    ['ma', 'fr'],
    ['tn', 'fr'],
    ['qa', 'ar'],
    ['kw', 'ar'],
    ['lb', 'ar'],
    ['cy', 'el'],
    ['ee', 'et'],
    ['lv', 'lv'],
    ['hr', 'hr'],
  ])('maps the storefront %s to its main language %s', (country, language) => {
    expect(storefrontLanguage(country)).toBe(language);
  });

  it('returns null for a country outside the table', () => {
    expect(storefrontLanguage('zz')).toBeNull();
  });

  it.each(['constructor', '__proto__'])(
    'returns null for the inherited object key %s',
    (country) => {
      expect(storefrontLanguage(country)).toBeNull();
    },
  );
});

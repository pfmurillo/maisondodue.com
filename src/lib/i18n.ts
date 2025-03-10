import * as runtime from '$lib/paraglide/runtime';
import { createI18n } from '@inlang/paraglide-sveltekit';
export const i18n = createI18n(runtime, {
	defaultLanguageTag: 'fr',
	//prefixDefaultLanguage: 'always',

	// DO NOT USE TRANSLATED PATHNAME BECAUSE OF VERCEL ISSUE
	pathnames: {
		'/sieges': {
			fr: '/sieges',
			en: '/upholstery'
		}
	}
});

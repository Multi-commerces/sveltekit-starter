import { contactModuleRegistry } from './contact/ModuleRegistry';
import { wikiModuleRegistry } from './wiki/ModuleRegistry';

export const moduleRegistry: any = {
	contact: contactModuleRegistry,
	wiki: wikiModuleRegistry
};

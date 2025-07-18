/**
 * Maps internal model names to actual API model names
 */

export const ANTHROPIC_MODEL_MAPPING = {
  'claude-3.5-sonnet': 'claude-3-5-sonnet-20241022',
  'claude-3.7-sonnet': 'claude-3-7-sonnet-20250219',
  'claude-3.5-haiku': 'claude-3-5-haiku-20241022',
  'claude-3-sonnet': 'claude-3-sonnet-20240229',
  'claude-sonnet-4': 'claude-sonnet-4-20250514',
  'claude-3-haiku': 'claude-3-haiku-20240307',
  'claude-3-opus': 'claude-3-opus-20240229',
  'claude-opus-4': 'claude-opus-4-20250514',
} as const;

/**
 * Maps internal model name to actual API model name
 * @param internalName
 */
export function mapModelNameForAPI(internalName: string): string {
  let mapping = ANTHROPIC_MODEL_MAPPING[internalName as keyof typeof ANTHROPIC_MODEL_MAPPING];
  return mapping || internalName;
}

/**
 * Check if a model name is supported by Anthropic API
 * @param modelName
 */
export function isAnthropicModel(modelName: string): boolean {
  return modelName.toLowerCase().includes('claude');
}

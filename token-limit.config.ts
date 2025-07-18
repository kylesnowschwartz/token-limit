import { defineConfig } from './config/define-config'

export default defineConfig([
  {
    name: 'Test API Integration',
    path: 'core/model-name-mapper.ts',
    limit: '2k',
    model: 'claude-sonnet-4',
  },
  {
    name: 'Anthropic API Client',
    path: 'core/anthropic-api-client.ts',
    limit: '5k',
    model: 'claude-3.5-sonnet',
  },
])
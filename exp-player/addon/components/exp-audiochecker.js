import Ember from 'ember';
import ExpFrameBaseComponent from 'exp-player/components/exp-frame-base';
import layout from '../templates/components/exp-audiochecker';

export default ExpFrameBaseComponent.extend({
    layout: layout,
    didFinishSound: false, // TODO: Placeholder until player merges data attrs into frame by default
    meta: {
        name: 'Audio checker',
        description: 'Component that plays a test sound clip',
        parameters: {
            type: 'object',
            properties: {
                autoplay: {
                    type: 'boolean',
                    description: 'Whether to autoplay the audio on load',
                    default: true,
                },
                mustPlay: {
                    type: 'boolean',
                    description: 'Should the user be forced to play the clip before leaving the page?',
                    default: true,
                },
                prompts: {
                    type: 'array',
                    description: 'Text of any header/prompt pararaphs to show the user',
                    default: true,
                },
                sources: {
                    type: 'string',
                    description: 'List of objects specifying audio src and type',
                    default: []
                }
            }
        }
    },

    data: {
        type: 'object',
        properties: {  // We don't *need* to tell the server about this, but it might be nice to track usage of the setup page
            didFinishSound: {
                type: 'boolean',
                default: false
            }
        },
        required: ['didFinishSound']
    },

    actions: {
        soundPlayed() {
            this.set('didFinishSound', true);
        }
    },

    allowNext: Ember.computed('didFinishSound', function() {
        // Optionally force user to listen to clip
        // TODO: fix the button on the page
        return !this.get('mustPlay') || this.get('didFinishSound');
    })
});

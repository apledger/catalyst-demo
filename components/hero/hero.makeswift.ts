import { List, Shape, TextArea, TextInput } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { Hero } from '.';

runtime.registerComponent(Hero, {
  type: 'Hero',
  label: 'Hero',
  props: {
    slides: List({
      getItemLabel(item) {
        return item?.title ?? '20% Off';
      },
      type: Shape({
        type: {
          title: TextInput({ label: 'Title', defaultValue: '20% Off' }),
          description: TextArea({
            label: 'Description',
            defaultValue:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          }),
          ctaText: TextInput({ label: 'CTA Text', defaultValue: 'Shop now plz' }),
        },
      }),
    }),
  },
});

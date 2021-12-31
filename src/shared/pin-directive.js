/* eslint-disable no-param-reassign */
// export default {
//   beforeMount(element, binding) {
//     if (binding.arg !== 'position') return;

//     Object.keys(binding.modifiers).forEach((key) => {
//       element.style[key] = '5px';
//     });
//     element.style.position = 'absolute';
//   },
// };

export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

// Other lifecycle hooks: created, mounted, beforeUnmount, unmounted

import route from '../internal/mixins/route';

export default {
  name: 'mu-breadcrumbs-item',
  mixins: [route],
  props: {
    disabled: Boolean
  },
  render (h) {
    const props = this.to ? this.generateRouteProps() : {};
    return h('li', [
      h(this.to ? 'router-link' : 'a', {
        staticClass: 'mu-breadcrumbs-item',
        class: this.disabled ? 'is-disbaled' : '',
        props
      }, this.$slots.default)
    ]);
  }
};
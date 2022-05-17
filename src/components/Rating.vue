<template>
  <div class="rating">
    <ul class="list">
      <li
        @click="rate(star)"
        v-for="star in maxStars"
        :class="{ 'active': star <= stars }"
        :key="star.stars"
        class="star"
      >
        <em :class="star <= stars ? 'fa-solid fa-star' : 'fa-regular fa-star'"></em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  model: {
    prop: 'stars',
    event: 'change',
  },
  props: {
    grade: { type: Number, default: () => 0 },
    maxStars: { type: Number, default: () => 5 },
  },
  data() {
    return {
      stars: this.grade,
    };
  },
  watch: {
    grade(newValue) {
      this.stars = newValue;
    },
  },
  methods: {
    rate(star) {
      if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star;
        this.$emit('change', this.stars);
      }
    },
  },
};
</script>

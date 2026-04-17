<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];
const list = states.map(
  (item): ListItem => {
    return { value: `value:${item}`, label: `label:${item}` };
  },
);

interface ListItem {
  value: string;
  label: string;
}

const value = ref([]);
const options = ref<ListItem[]>([]);
const loading = ref(false);

const remoteMethod = (query: string) => {
  if (query !== '') {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = list.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    options.value = [];
  }
};

const input_value = ref('');
</script>

<template>
  <div class="flex flex-wrap">
    <el-input
      v-model="input_value"
      style="max-width: 600px;"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-button :icon="Search" />
      </template>
    </el-input>
  </div>
</template>

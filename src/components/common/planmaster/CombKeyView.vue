<template>
  <!-- <div class="field col-12 md:col-12">
        <label>{{ combKeyLabel }}</label><br><br>
        <div v-for="combkey of combinationKey" :key="combkey.key" class="field-checkbox">
            <Checkbox :id="category.key" name="category" :value="category" v-model="inputForm.categories" :disabled="category.key === 'R'"/>
            <label :for="category.key">{{category.name}}</label>
        </div>
    </div>
    <div class="field col-12 md:col-12">
        <label for="sumAssuredRate">Sum Assured Rate Table</label>
        <Dropdown class="p-inputtext-sm" v-model="inputForm.sumAssuredRate" id="sumAssuredRate" :options="sumAssuredRateLs" optionLabel="name" optionValue="value" placeholder="Select one..." />
    </div> -->

  <!-- <div class="field col-12 md:col-12 -mb-2">
    <label>{{ label }}</label
    ><br /><br />
    show value: {{ combKeyObj.combKey }}
  </div>
  <template v-for="(combkey, index) in combinationKey" :key="combkey.key">
    <template v-if="index <= 3">
      <div class="field-checkbox col-3 -mb-1">
        <Checkbox
          :id="combkey.key"
          name="combkey"
          :value="combkey"
          v-model="combKeyObj.combKey"
        />
        <label>{{ combkey.name }}</label>
      </div>
    </template>
  </template>
  <template v-for="(combkey, index) in combinationKey" :key="combkey.key">
    <template v-if="index >= 4 && index <= 7">
      <div class="field-checkbox col-3 -mb-1">
        <Checkbox
          :id="combkey.key"
          name="combkey"
          :value="combkey"
          v-model="combKeyObj.combKey"
        />
        <label>{{ combkey.name }}</label>
      </div>
    </template>
  </template>
  <template v-for="(combkey, index) in combinationKey" :key="combkey.key">
    <template v-if="index >= 8 && index <= 10">
      <div class="field-checkbox col-3">
        <Checkbox
          :id="combkey.key"
          name="combkey"
          :value="combkey"
          v-model="combKeyObj.combKey"
        />
        <label>{{ combkey.name }}</label>
      </div>
    </template>
  </template> -->

  <KeyTable
    :label="label"
    :combkeyLabel="combkeyLabel"
    :masterCode="masterCode"
    :routePath="routePath"
    :combKeyInd="combKeyInd"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import KeyTable from "@/components/common/planmaster/KeyTable";

export default {
  props: {
    modelValue: String,
    label: String,
    combkeyLabel: String,
    masterCode: String,
    routePath: String,
    combKeyInd: Boolean,
  },
  components: {
    KeyTable,
  },
  setup() {
    const store = useStore();
    const combKeyObj = computed(() => store.state.planmaster.combKeyObj);

    const combinationKey = [
      { name: "Distribution Channel", key: "D" },
      { name: "Gender", key: "G" },
      { name: "Smoker / Non smoker", key: "S" },
      { name: "Coverage Expiry Age", key: "C" },
      { name: "Pension Age / Benefit Expiry Age", key: "A" },
      { name: "Premium Payment Expiry Age", key: "R" },
      { name: "Coverage Term", key: "T" },
      { name: "Benefit Term", key: "B" },
      { name: "Premium Payment Period", key: "Y" },
      { name: "Benefit Component Code", key: "O" },
      { name: "Monthly/ Yearly", key: "M" },
    ];

    return {
      combKeyObj,
      combinationKey,
    };
  },
};
</script>

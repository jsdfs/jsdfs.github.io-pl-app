<template>

  <template  v-for="item in items" >  
    <template  v-for="itemLabel in item.items" :key="itemLabel.label">  

      
      <div style="display: inline-block; width:100%;" v-if="itemLabel.label == selectedMenuItem" :key="itemLabel.label">
        <div class="grid">
          <div class="col-12 xl:col-12">
              <div class="p-fluid formgrid grid" style="height: 100%; max-height: 100%; min-height: 100%;">
                <template  v-for="itemContent in itemLabel.items" :key="itemContent.label">  

                      <div class="field col-12 xl:col-3 md:col-6 colfield">
                          <span class="block font-medium mt-2 ml-3 text-secondary text-center">{{itemContent.label}}</span>
                    
                          <div class="wrapper align-items-center justify-content-center p-2">
                            <template  v-for="itemIcon in itemContent.items" :key="itemIcon.label">  
                              <div class="flex align-items-center justify-content-center border border-round mx-auto " style="width:2.5rem;height:2.5rem; box-shadow: 4px 0.5px	#DCDCDC;">                        
                                <router-link :to="itemIcon.to"  style=" display:flex; justify-content: center;">
                                  <i :class="itemIcon.icon" v-tooltip="itemIcon.label"></i>
                                </router-link>
                              </div>
                              

                              </template>
                          </div>

                      </div>
                       <Divider layout="vertical"/>
                </template>
            </div>
          </div>
        </div>
      </div>
    
    </template>
  </template>
</template>

<script>


export default {
  name: "appsubmenu",
  props: {
    items: Array,
    selectedMenuItem: String,
  },
  data() {
    return {
    
    };
  },
  methods: {
 
  },
  components:{
    
  }
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  grid-gap: 7px;

}

.colfield {
  margin-bottom: 0px;
}

.p-divider.p-divider-vertical{
  margin: 0rem;
  margin-top: 1.5%;
  height: 80px;
  min-height: 80px;
  max-height: 80px;
}


</style>

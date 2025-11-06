"use strict";

import { createApp, ref, watch, computed } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.13/vue.esm-browser.min.js";

let config = {};

config.setup = function() {
    //input variables
    let contributionType = ref('dollar');
    let contributionAmount = ref(0);

    //hardcoded salary and contribution history values
    const salary = ref(80000);
    const contributionHistory = ref([
        { month: "January", amount: 400 },
        { month: "February", amount: 420 },
        { month: "March", amount: 430 },
        { month: "April", amount: 440 },
        { month: "May", amount: 450 },
        { month: "June", amount: 460 },
        { month: "July", amount: 470 },
        { month: "August", amount: 480 },
        { month: "September", amount: 490 },
        { month: "October", amount: 500 },
    ]);

    //correctly change the contribution amount between dollar and percentage
    watch(contributionType, () => {
        if (contributionType.value == 'dollar') {
            //convert percentage to dollar amount
            contributionAmount.value = Math.round(contributionAmount.value / 100 * (salary.value / 12));
        } else if (contributionType.value == 'percentage') {
            //convert dollar amount to percentage
            contributionAmount.value = Math.round((contributionAmount.value / (salary.value/12)) * 100);
        }
    });

    //calculates the current contribution based on if its already a number or a percentage
    const currContribution = computed(() => {
        return contributionType.value === 'dollar' 
            ? contributionAmount.value 
            : Math.round((salary.value/12) * (contributionAmount.value/100));
    })

    //calculates the sum of the contribution history
    const totalYTD = computed(() => {
        let sum = 0
        for (let i=0 ; i<contributionHistory.value.length ; i++) {
            sum += contributionHistory.value[i].amount;
        }
        return sum;
    })

    //calculates potential savings for many years in the future
    const savingsProjection = computed(() => {
        const currAge = 30;
        const retireAge = 65;
        const interval = 5;

        const savings = [];
        for (let age = currAge ; age <= retireAge ; age += interval) {
            //calculate the savings for this age and then push to savings
            const years = age - currAge;
            const total = (totalYTD.value + (2 * currContribution.value)) * years
            savings.push({age, money: total})
        }

        return savings;
    })
    

    return {contributionType, contributionAmount, salary, contributionHistory, currContribution, totalYTD, savingsProjection};
};

window.k401 = createApp(config).mount("#app");
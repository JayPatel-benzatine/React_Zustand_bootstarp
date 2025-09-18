import {Access_AI, AI_, ALL_FILTERS, BRONZE, DOWNLOAD_EX4, DOWNLOAD_EX5, DOWNLOAD_MQ4, DOWNLOAD_MQ5, GOLD, LIMITED_FILTERS, SILVER} from "./messages";


export const plan = {
    free: "free",
    bronze: BRONZE,
    silver:SILVER,
    gold:GOLD
}

export const PLANS = {
    [plan.free]:{
        downgrade_msg:"",
        options:[
                  {content: LIMITED_FILTERS, allowed: true},
                  {content: DOWNLOAD_EX4, allowed: false},
                  {content: DOWNLOAD_MQ4, allowed: false},
                ]
    },
    [plan.bronze]:{
        upgrade_msg:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        no_sub_upgrade_msg: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        downgrade_msg:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        options:[
                  {content: LIMITED_FILTERS, allowed: true},
                  {content: DOWNLOAD_EX4, allowed: true},
                  {content: DOWNLOAD_EX5, allowed: true},
                //   {content: DOWNLOAD_MQ4, allowed: false},
                //   {content: DOWNLOAD_MQ5, allowed: false},
                ]
    },
    [plan.silver]:{
        upgrade_msg:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        no_sub_upgrade_msg: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        downgrade_msg:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        options:[
                  {content: AI_, allowed: true},
                  {content: ALL_FILTERS, allowed: true},
                  {content: DOWNLOAD_EX4, allowed: true},
                  {content: DOWNLOAD_EX5, allowed: true},
                  { content: Access_AI, allowed: true },
                ]
    },
    [plan.gold]:{
        upgrade_msg:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        no_sub_upgrade_msg: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        downgrade_msg:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli.",
        options:[
                  {content: AI_, allowed: true},
                  {content: ALL_FILTERS, allowed: true},
                  {content: DOWNLOAD_EX4, allowed: true},
                  {content: DOWNLOAD_EX5, allowed: true},
                  {content: DOWNLOAD_MQ4, allowed: true},
                  {content: DOWNLOAD_MQ5, allowed: true},
                  { content: Access_AI, allowed: true },
                ]
    }
}
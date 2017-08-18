angular.module('starter.controllers', ['pascalprecht.translate'])

.controller('AppCtrl', function ($scope, $translate, $ionicModal, $ionicSideMenuDelegate, $ionicHistory, $timeout, $window, myAppConfig, Languages) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    
    $scope.changeLang = $translate.preferredLanguage() == "es" ? "ENGLISH" : "ESPAÑOL";
    $scope.changeLangCode = $translate.preferredLanguage() == "es" ? "en" : "es";
    
    $scope.switchLang = function(code){
        localStorage.currentLang = code;
        $translate.preferredLanguage(code);
        $window.location.reload(true);
    }
    
    $scope.translations = Languages;
    localStorage.fbStatus = "";

    getOfflinePorgramObject = function (name) {
        var returnedObj;
        var i = 0;
        angular.forEach($scope.offlinePrograms, function (value, key, obj) {
            if (name == value.apiName) {
                returnedObj = value;
            }
        })
        return returnedObj;
    }
    
    $scope.offlinePrograms = [        
        {
            name: translationsRoutines[$translate.preferredLanguage()]['earth-element-upper'],
            apiName: "Earth_Element",
            runningtime: "15:22",
            description: translationsRoutines[$translate.preferredLanguage()]['earth-element-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['fire-element-upper'],
            apiName: "Fire_Element",
            runningtime: "16:05",
            description: translationsRoutines[$translate.preferredLanguage()]['fire-element-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['metal-element-upper'],
            apiName: "Metal_Element",
            runningtime: "13:11",
            description: translationsRoutines[$translate.preferredLanguage()]['metal-element-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['water-element-upper'], 
            apiName: "Water_Element",
            runningtime: "15:18",
            description: translationsRoutines[$translate.preferredLanguage()]['water-element-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['wood-element-upper'],
            apiName: "Wood_Element",
            runningtime: "11:06",
            description: translationsRoutines[$translate.preferredLanguage()]['wood-element-description']
        },   
        {
            name: translationsRoutines[$translate.preferredLanguage()]['gallbladder-meridian-upper'],
            apiName: "Gallbladder_Meridian",
            runningtime: "19:31",
            description: translationsRoutines[$translate.preferredLanguage()]['gallbladder-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['heart-meridian-upper'],
            apiName: "Heart_Meridian",
            runningtime: "13:30",
            description: translationsRoutines[$translate.preferredLanguage()]['heart-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['kidney-meridian-upper'],
            apiName: "Kidney_Meridian",
            runningtime: "14:54",
            description: translationsRoutines[$translate.preferredLanguage()]['kidney-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['large-intestine-meridian-upper'],
            apiName: "Large_Intestine_Meridian",
            runningtime: "12:02",
            description: translationsRoutines[$translate.preferredLanguage()]['large-intestine-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['liver-meridian-upper'],
            apiName: "Liver_Meridian",
            runningtime: "14:38",
            description: translationsRoutines[$translate.preferredLanguage()]['liver-meridian-description']
        },

        {
            name: translationsRoutines[$translate.preferredLanguage()]['lung-meridian-upper'],
            apiName: "Lung_Meridian",
            runningtime: "15:23",
            description: translationsRoutines[$translate.preferredLanguage()]['lung-meridian-description']
        }, 
        {
            name: translationsRoutines[$translate.preferredLanguage()]['pericardium-meridian-upper'],
            apiName: "Pericardium_Meridian",
            runningtime: "20:40",
            description: translationsRoutines[$translate.preferredLanguage()]['pericardium-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['small-intestine-meridian-upper'],
            apiName: "Small_Intestine_Meridian",
            runningtime: "12:10",
            description: translationsRoutines[$translate.preferredLanguage()]['small-intestine-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['spleen-pancreas-meridian-upper'],
            apiName: "Spleen_Meridian",
            runningtime: "14:22",
            description: translationsRoutines[$translate.preferredLanguage()]['spleen-pancreas-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['stomach-meridian-upper'],
            apiName: "Stomach_Meridian",
            runningtime: "15:24",
            description: translationsRoutines[$translate.preferredLanguage()]['stomach-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['triple-warmer-meridian-upper'],
            apiName: "Triple_Warmer_Meridian",
            runningtime: "12:05",
            description: translationsRoutines[$translate.preferredLanguage()]['triple-warmer-meridian-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['urinary-bladder-meridian-upper'],
            apiName: "Urinary_Bladder_Meridian",
            runningtime: "13:04",
            description: translationsRoutines[$translate.preferredLanguage()]['urinary-bladder-meridian-description']
        },            
        {
            name: "1" + translations[$translate.preferredLanguage()]['number-st'] + " CHAKRA",
            apiName: "Root_Chakra",
            runningtime: "14:34",
            description: translationsRoutines[$translate.preferredLanguage()]['1-chakra-description']
        },
        {
            name: "2" + translations[$translate.preferredLanguage()]['number-nd'] + " CHAKRA",
            apiName: "Sacral_Chakra",
            runningtime: "12:06",
            description: translationsRoutines[$translate.preferredLanguage()]['2-chakra-description']
        },
        {
            name: "3" + translations[$translate.preferredLanguage()]['number-rd'] + " CHAKRA",
            apiName: "Solar_Plexus_Chakra",
            runningtime: "15:18",
            description: translationsRoutines[$translate.preferredLanguage()]['3-chakra-description']
        },
        {
            name: "4" + translations[$translate.preferredLanguage()]['number-th'] + " CHAKRA",
            apiName: "Heart_Chakra",
            runningtime: "17:01",
            description: translationsRoutines[$translate.preferredLanguage()]['4-chakra-description']
        },
        {
            name: "5" + translations[$translate.preferredLanguage()]['number-th'] + " CHAKRA",
            apiName: "Throat_Chakra",
            runningtime: "15:50",
            description: translationsRoutines[$translate.preferredLanguage()]['5-chakra-description']
        },
        {
            name: "6" + translations[$translate.preferredLanguage()]['number-th'] + " CHAKRA",
            apiName: "Brow_Chakra",
            runningtime: "14:40",
            description: translationsRoutines[$translate.preferredLanguage()]['6-chakra-description']
        },
        {
            name: "7" + translations[$translate.preferredLanguage()]['number-7'] + " CHAKRA",
            apiName: "Crown_Chakra",
            runningtime: "12:12",
            description: translationsRoutines[$translate.preferredLanguage()]['7-chakra-description']
        },         
        {
            name: translationsRoutines[$translate.preferredLanguage()]['addiction-upper'],
            apiName: "Addiction",
            runningtime: "13:14",
            description: translationsRoutines[$translate.preferredLanguage()]['addiction-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['adrenal-gland-upper'],
            apiName: "Adrenal_Gland",
            runningtime: "13:34",
            description: translationsRoutines[$translate.preferredLanguage()]['adrenal-gland-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['anti-aging-upper'],
            apiName: "Anti_Aging",
            runningtime: "11:01",
            description: translationsRoutines[$translate.preferredLanguage()]['anti-aging-description'],
        },

        {
            name: translationsRoutines[$translate.preferredLanguage()]['auditory-upper'],
            apiName: "Auditory_System",
            runningtime: "13:16",
            description: translationsRoutines[$translate.preferredLanguage()]['auditory-description'],
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['backache-upper'],
            apiName: "Backache",
            runningtime: "15:15",
            description: translationsRoutines[$translate.preferredLanguage()]['backache-description'],
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['bones-upper'],
            apiName: "Bone_Tissues",
            runningtime: "14:07",
            description: translationsRoutines[$translate.preferredLanguage()]['bones-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['child-developement-upper'],
            apiName: "Child_Development",
            runningtime: "12:17",
            description: translationsRoutines[$translate.preferredLanguage()]['child-developement-description'],
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['circulatory-system-upper'],
            apiName: "Circulatory_System",
            runningtime: "14:09",
            description: translationsRoutines[$translate.preferredLanguage()]['circulatory-system-description'],
        },
        {
            name:  translationsRoutines[$translate.preferredLanguage()]['concentration-upper'],
            apiName: "Concentration",
            runningtime: "19:28",
            description: translationsRoutines[$translate.preferredLanguage()]['concentration-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['connective-tissue-upper'],
            apiName: "Connective_Tissues",
            runningtime: "15:39",
            description: translationsRoutines[$translate.preferredLanguage()]['connective-tissue-description'],
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['constipation-upper'],
            apiName: "Constipation",
            runningtime: "13:34",
            description: translationsRoutines[$translate.preferredLanguage()]['constipation-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['detoxification-upper'],
            apiName: "Detoxification",
            runningtime: "14:22",
            description: translationsRoutines[$translate.preferredLanguage()]['detoxification-description'],
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['diarrhea-upper'],
            apiName: "Diarrhea",
            runningtime: "13:02",
            description: translationsRoutines[$translate.preferredLanguage()]['diarrhea-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['digestive-system-upper'],
            apiName: "Digestive_System",
            runningtime: "15:08",
            description: translationsRoutines[$translate.preferredLanguage()]['digestive-system-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['discernment-upper'],
            apiName: "Discernment",
            runningtime: "12:40",
            description: translationsRoutines[$translate.preferredLanguage()]['discernment-description']
        },
        {
            name: "E-SMOG",
            apiName: "Electro_Smog",
            runningtime: "13:18",
            description: translationsRoutines[$translate.preferredLanguage()]['e-smog-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['energy-balancing-upper'],
            apiName: "Energy_Balancing",
            runningtime: "15:28",
            description: translationsRoutines[$translate.preferredLanguage()]['energy-balancing-description'],
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['energy-booster-upper'],
            apiName: "Energy_Booster",
            runningtime: "13:14",
            description: translationsRoutines[$translate.preferredLanguage()]['energy-booster-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['exhaustion-upper'],
            apiName: "Exhaustion",
            runningtime: "13:08",
            description: translationsRoutines[$translate.preferredLanguage()]['exhaustion-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['eyesight-upper'],
            apiName: "Eyesight",
            runningtime: "15:31",
            description: translationsRoutines[$translate.preferredLanguage()]['eyesight-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['female-upper'],
            apiName: "Female_Hormone_Balance",
            runningtime: "12:40",
            description: translationsRoutines[$translate.preferredLanguage()]['female-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['flu-upper'],
            apiName: "Flu",
            runningtime: "13:20",
            description: translationsRoutines[$translate.preferredLanguage()]['flu-description']
        },

        {
            name: translationsRoutines[$translate.preferredLanguage()]['glucose-metabolic-disorders-upper'],
            apiName: "Glucose_Metabolic_Disorders",
            runningtime: "16:29",
            description: translationsRoutines[$translate.preferredLanguage()]['glucose-metabolic-disorders-description'],
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['hair-growth-upper'],
            apiName: "Hair_Growth",
            runningtime: "18:10",
            description: translationsRoutines[$translate.preferredLanguage()]['hair-growth-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['headache-upper'],
            apiName: "Headache",
            runningtime: "12:33",
            description: translationsRoutines[$translate.preferredLanguage()]['headache-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['heart-function-upper'],
            apiName: "Heart_Function",
            runningtime: "12:33",
            description: translationsRoutines[$translate.preferredLanguage()]['heart-function-description']
        },

        {
            name: translationsRoutines[$translate.preferredLanguage()]['hemorrhoids-upper'],
            apiName: "Hemorrhoids",
            runningtime: "14:16",
            description: translationsRoutines[$translate.preferredLanguage()]['hemorrhoids-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['hypertension-upper'],
            apiName: "Hypertension",
            runningtime: "13:02",
            description: translationsRoutines[$translate.preferredLanguage()]['hypertension-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['immune-system-upper'],
            apiName: "Immune_System",
            runningtime: "12:41",
            description: translationsRoutines[$translate.preferredLanguage()]['immune-system-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['injury-upper'],
            apiName: "Injury",
            runningtime: "16:55",
            description: translationsRoutines[$translate.preferredLanguage()]['injury-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['intestinal-flora-upper'],
            apiName: "Intestinal_Flora",
            runningtime: "11:16",
            description: translationsRoutines[$translate.preferredLanguage()]['intestinal-flora-description']
        },
        {
            name: "JET-LAG",
            apiName: "Jet-Lag/Climate_Change",
            runningtime: "14:23",
            description: translationsRoutines[$translate.preferredLanguage()]['jet-lag-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['joints-upper'],
            apiName: "Joints",
            runningtime: "15:52",
            description: translationsRoutines[$translate.preferredLanguage()]['joints-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['joy-upper'],
            apiName: "Joy",
            runningtime: "19:31",
            description: translationsRoutines[$translate.preferredLanguage()]['joy-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['low-mental-drive-upper'],
            apiName: "Low_Mental_Drive",
            runningtime: "14:53",
            description: translationsRoutines[$translate.preferredLanguage()]['low-mental-drive-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['low-physical-drive-upper'],
            apiName: "Low_Physical_Drive",
            runningtime: "16:10",
            description: translationsRoutines[$translate.preferredLanguage()]['low-physical-drive-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['lymphatic-system-upper'],
            apiName: "Lymphatic_System",
            runningtime: "15:07",
            description: translationsRoutines[$translate.preferredLanguage()]['lymphatic-system-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['male-upper'],
            apiName: "Male_Hormone_Balance",
            runningtime: "14:56",
            description: translationsRoutines[$translate.preferredLanguage()]['male-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['meditation-1-upper'],
            apiName: "Meditation_1",
            runningtime: "31:51",
            description: translationsRoutines[$translate.preferredLanguage()]['meditation-1-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['meditation-2-upper'],
            apiName: "Meditation_2",
            runningtime: "28:20",
            description: translationsRoutines[$translate.preferredLanguage()]['meditation-2-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['meditation-3-upper'],
            apiName: "Meditation_3",
            runningtime: "21:27",
            description: translationsRoutines[$translate.preferredLanguage()]['meditation-3-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['mineral-metabolic-activity-upper'],
            apiName: "Mineral_Metabolic_Activity",
            runningtime: "16:38",
            description: translationsRoutines[$translate.preferredLanguage()]['mineral-metabolic-activity-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['muscle-tissue-upper'],
            apiName: "Muscle_Tissues",
            runningtime: "14:44",
            description: translationsRoutines[$translate.preferredLanguage()]['muscle-tissue-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['neck-shoulder-upper'],
            apiName: "Neck/Shoulder",
            runningtime: "14:25",
            description: translationsRoutines[$translate.preferredLanguage()]['neck-shoulder-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['nervous-system-upper'],
            apiName: "Nervous_System",
            runningtime: "18:13",
            description: translationsRoutines[$translate.preferredLanguage()]['nervous-system-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['pain-upper'],
            apiName: "Pain_Conditions",
            runningtime: "13:45",
            description: translationsRoutines[$translate.preferredLanguage()]['pain-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['peace-upper'],
            apiName: "Peace",
            runningtime: "19:23",
            description: translationsRoutines[$translate.preferredLanguage()]['peace-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['regeneration-upper'],
            apiName: "Regeneration",
            runningtime: "15:39",
            description: translationsRoutines[$translate.preferredLanguage()]['regeneration-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['relaxation-upper'],
            apiName: "Relaxation",
            runningtime: "18:40",
            description: translationsRoutines[$translate.preferredLanguage()]['relaxation-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['respiratory-system-upper'],
            apiName: "Respiratory_System",
            runningtime: "14:37",
            description: translationsRoutines[$translate.preferredLanguage()]['respiratory-system-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['sinus-cavities-upper'],
            apiName: "Sinus_Cavities",
            runningtime: "14:36",
            description: translationsRoutines[$translate.preferredLanguage()]['sinus-cavities-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['skin-conditions-upper'],
            apiName: "Skin_Conditions",
            runningtime: "11:56",
            description: translationsRoutines[$translate.preferredLanguage()]['skin-conditions-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['sleep-enhancer-upper'],                       
            apiName: "Sleep_Enhancer",
            runningtime: "18:43",
            description: translationsRoutines[$translate.preferredLanguage()]['sleep-enhancer-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['stress-relief-upper'],  
            apiName: "Frustration",
            runningtime: "16:46",
            description: translationsRoutines[$translate.preferredLanguage()]['stress-relief-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['thyroid-glands-upper'],  
            apiName: "Thyroid_Glands",
            runningtime: "17:43",
            description: translationsRoutines[$translate.preferredLanguage()]['thyroid-glands-description']
        },

        {
            name: translationsRoutines[$translate.preferredLanguage()]['urinary-upper'],  
            apiName: "Urinary_System/Cystitis",
            runningtime: "12:24",
            description: translationsRoutines[$translate.preferredLanguage()]['urinary-description']
        },

        {
            name: translationsRoutines[$translate.preferredLanguage()]['vertebrae-upper'], 
            apiName: "Vertebrae",
            runningtime: "17:20",
            description: translationsRoutines[$translate.preferredLanguage()]['vertebrae-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['vitality-upper'], 
            apiName: "Vitality",
            runningtime: "12:45",
            description: translationsRoutines[$translate.preferredLanguage()]['vitality-description']
        },
        {
            name: translationsRoutines[$translate.preferredLanguage()]['weight-control-upper'],
            apiName: "Weight_Control",
            runningtime: "17:43",
            description: translationsRoutines[$translate.preferredLanguage()]['weight-control-description']
        }
];


    $scope.offlineGroups = [

        {
            category: 'basic',
            name: translationsRoutines[$translate.preferredLanguage()]['pain-relief-upper'],
            programs: [
                 getOfflinePorgramObject("Pain_Conditions"),
                 getOfflinePorgramObject("Nervous_System"),
                 getOfflinePorgramObject("Peace"),
                 getOfflinePorgramObject("Regeneration")
             ]
        },

        {
            category: 'basic',
            name: translationsRoutines[$translate.preferredLanguage()]['injury-upper'],
            programs: [
                 getOfflinePorgramObject("Injury"),
                 getOfflinePorgramObject("Lymphatic_System"),
                 getOfflinePorgramObject("Bone_Tissues"),
                 getOfflinePorgramObject("Energy_Balancing")
             ]
        },

        {
            category: 'basic',
            name: translationsRoutines[$translate.preferredLanguage()]['stress-relief-upper'],
            programs: [
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Electro_Smog"),
                 getOfflinePorgramObject("Relaxation"),
                 getOfflinePorgramObject("Energy_Balancing")
             ]
        },
        {
            category: 'basic',
            name: translationsRoutines[$translate.preferredLanguage()]['immune-system-upper'],
            programs: [
                 getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Lymphatic_System"),
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Energy_Balancing")
             ]
        },
        {
            category: 'basic',
            name: translationsRoutines[$translate.preferredLanguage()]['respiratory-system-upper'],
            programs: [
                 getOfflinePorgramObject("Respiratory_System"),
                 getOfflinePorgramObject("Sinus_Cavities"),
                 getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Lung_Meridian")
             ]
        },
        {
            category: 'basic',
            name: translationsRoutines[$translate.preferredLanguage()]['detoxification-upper'],
            programs: [
                 getOfflinePorgramObject("Detoxification"),
                 getOfflinePorgramObject("Digestive_System"),
                 getOfflinePorgramObject("Large_Intestine_Meridian"),
                 getOfflinePorgramObject("Intestinal_Flora")
             ]
        },
        {
            category: 'basic',
            name: translationsRoutines[$translate.preferredLanguage()]['headache-upper'],
            programs: [
                 getOfflinePorgramObject("Headache"),
                 getOfflinePorgramObject("Peace"),
                 getOfflinePorgramObject("Energy_Balancing"),
                 getOfflinePorgramObject("Liver_Meridian")
             ]
        },
        {
            category: 'basic',
            name: translationsRoutines[$translate.preferredLanguage()]['grounding-upper'],
            programs: [
                 getOfflinePorgramObject("Energy_Balancing"),
                 getOfflinePorgramObject("Electro_Smog"),
                 getOfflinePorgramObject("Earth_Element"),
                 getOfflinePorgramObject("Root_Chakra")
             ]
        },

        {
            category: 'business and travel',
            name: translationsRoutines[$translate.preferredLanguage()]['energy-booster-upper'],
            programs: [
                getOfflinePorgramObject("Energy_Booster"),
                 getOfflinePorgramObject("Exhaustion"),
                 getOfflinePorgramObject("Adrenal_Gland"),
                 getOfflinePorgramObject("Brow_Chakra")

             ]
        },
        {
            category: 'business and travel',
            name: 'JET-LAG',
            programs: [
                getOfflinePorgramObject("Jet-Lag/Climate_Change"),
                 getOfflinePorgramObject("Electro_Smog"),
                 getOfflinePorgramObject("Relaxation"),
                 getOfflinePorgramObject("Earth_Element")

             ]
        },
        {
            category: 'business and travel',
            name: 'JET-LAG',
            programs: [
                getOfflinePorgramObject("Jet-Lag/Climate_Change"),
                 getOfflinePorgramObject("Exhaustion"),
                 getOfflinePorgramObject("Circulatory_System"),
                 getOfflinePorgramObject("Energy_Booster")

             ]
        },
        {
            category: 'business and travel',
            name: translationsRoutines[$translate.preferredLanguage()]['concentration-upper'],
            programs: [
                getOfflinePorgramObject("Concentration"),
                 getOfflinePorgramObject("Discernment"),
                 getOfflinePorgramObject("Adrenal_Gland"),
                 getOfflinePorgramObject("Brow_Chakra")

             ]
        },
        {
            category: 'business and travel',
            name: translationsRoutines[$translate.preferredLanguage()]['digestion-upper'],
            programs: [
                getOfflinePorgramObject("Digestive_System"),
                getOfflinePorgramObject("Detoxification"),
                 getOfflinePorgramObject("Mineral_Metabolic_Activity"),
                 getOfflinePorgramObject("Intestinal_Flora")


             ]
        },
        {
            category: 'business and travel',
            name: translationsRoutines[$translate.preferredLanguage()]['respiratory-system-upper'],
            programs: [
                getOfflinePorgramObject("Respiratory_System"),
                 getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Lymphatic_System"),
                 getOfflinePorgramObject("Lung_Meridian")

             ]
                    },
        {
            category: 'business and travel',
            name: translationsRoutines[$translate.preferredLanguage()]['lower-backache-upper'],
            programs: [
                getOfflinePorgramObject("Backache"),
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Root_Chakra"),
                 getOfflinePorgramObject("Kidney_Meridian")

             ]
        },
        {
            category: 'business and travel',
            name: translationsRoutines[$translate.preferredLanguage()]['neck-shoulder-upper'],
            programs: [
                getOfflinePorgramObject("Neck/Shoulder"),
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Muscle_Tissues"),
                 getOfflinePorgramObject("Gallbladder_Meridian")

             ]
        },



        {
            category: 'business and travel',
            name: translationsRoutines[$translate.preferredLanguage()]['sleep-enhancer-upper'],
            programs: [
                getOfflinePorgramObject("Sleep_Enhancer"),
                getOfflinePorgramObject("Electro_Smog"),
                getOfflinePorgramObject("Relaxation"),
                getOfflinePorgramObject("Frustration")
            ]
                    },

        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['children-upper'],
            programs: [
                getOfflinePorgramObject("Child_Development"),
                 getOfflinePorgramObject("Bone_Tissues"),
                 getOfflinePorgramObject("Muscle_Tissues"),
                 getOfflinePorgramObject("Nervous_System")

             ]
                    },


        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['female-hormonal-imbalances-upper'],
            programs: [
                getOfflinePorgramObject("Female_Hormone_Balance"),
                getOfflinePorgramObject("Kidney_Meridian"),
                 getOfflinePorgramObject("Liver_Meridian"),
                 getOfflinePorgramObject("Sacral_Chakra")
             ]
                    },
        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['male-hormonal-imbalances-upper'],
            programs: [
                getOfflinePorgramObject("Male_Hormone_Balance"),
                 getOfflinePorgramObject("Circulatory_System"),
                 getOfflinePorgramObject("Kidney_Meridian"),
                 getOfflinePorgramObject("Sacral_Chakra")

             ]
                    },

        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['cold-flu-upper'],
            programs: [
                getOfflinePorgramObject("Flu"),
                 getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Respiratory_System")

             ]
                    },

        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['constipation-upper'],
            programs: [
                getOfflinePorgramObject("Constipation"),
                 getOfflinePorgramObject("Digestive_System"),
                 getOfflinePorgramObject("Gallbladder_Meridian"),
                 getOfflinePorgramObject("Large_Intestine_Meridian")

             ]
                    },

        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['diarrhea-upper'],
            programs: [
                getOfflinePorgramObject("Diarrhea"),
                 getOfflinePorgramObject("Detoxification"),
                 getOfflinePorgramObject("Digestive_System"),
                 getOfflinePorgramObject("Intestinal_Flora")

             ]
                    },

        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['ear-problems-upper'],
            programs: [
                getOfflinePorgramObject("Auditory_System"),
                 getOfflinePorgramObject("Triple_Warmer_Meridian"),
                 getOfflinePorgramObject("Brow_Chakra"),
                 getOfflinePorgramObject("Energy_Balancing")

             ]
                    },

        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['eyesight-upper'],
            programs: [
                getOfflinePorgramObject("Eyesight"),
                 getOfflinePorgramObject("Kidney_Meridian"),
                 getOfflinePorgramObject("Liver_Meridian"),
                 getOfflinePorgramObject("Brow_Chakra")

             ]
                    },

        {
            category: 'family',
            name: translationsRoutines[$translate.preferredLanguage()]['intestinal-flu-upper'],
            programs: [
                getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Flu"),
                 getOfflinePorgramObject("Detoxification"),
                 getOfflinePorgramObject("Intestinal_Flora")

             ]
                    },


        {
            category: 'athlete',
            name: translationsRoutines[$translate.preferredLanguage()]['energy-booster-upper'],
            programs: [
                getOfflinePorgramObject("Energy_Booster"),
                 getOfflinePorgramObject("Adrenal_Gland"),
                 getOfflinePorgramObject("Circulatory_System"),
                 getOfflinePorgramObject("Pericardium_Meridian")

             ]
                    },

        {
            category: 'athlete',
            name: translationsRoutines[$translate.preferredLanguage()]['regeneration-upper'],
            programs: [
                getOfflinePorgramObject("Regeneration"),
                 getOfflinePorgramObject("Lymphatic_System"),
                 getOfflinePorgramObject("Liver_Meridian"),
                 getOfflinePorgramObject("Vitality")

             ]
                    },

        {
            category: 'athlete',
            name: translationsRoutines[$translate.preferredLanguage()]['respiratory-system-upper'],
            programs: [
                getOfflinePorgramObject("Respiratory_System"),
                 getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Sinus_Cavities"),
                 getOfflinePorgramObject("Lung_Meridian")

             ]
                    },

        {
            category: 'athlete',
            name: translationsRoutines[$translate.preferredLanguage()]['injury-upper'],
            programs: [
                getOfflinePorgramObject("Injury"),
                 getOfflinePorgramObject("Bone_Tissues"),
                 getOfflinePorgramObject("Muscle_Tissues"),
                 getOfflinePorgramObject("Pain_Conditions")

             ]
                    },
        {
            category: 'athlete',
            name: translationsRoutines[$translate.preferredLanguage()]['pain-upper'],
            programs: [
                 getOfflinePorgramObject("Nervous_System"),
                  getOfflinePorgramObject("Pain_Conditions"),
                 getOfflinePorgramObject("Regeneration"),
                 getOfflinePorgramObject("Energy_Balancing")

             ]
                    },

        {
            category: 'athlete',
            name: translationsRoutines[$translate.preferredLanguage()]['backache-upper'],
            programs: [
                getOfflinePorgramObject("Backache"),
                 getOfflinePorgramObject("Neck/Shoulder"),
                 getOfflinePorgramObject("Vertebrae"),
                 getOfflinePorgramObject("Gallbladder_Meridian")

             ]
                    },

        {
            category: 'athlete',
            name: translationsRoutines[$translate.preferredLanguage()]['muscles-upper'],
            programs: [
                getOfflinePorgramObject("Muscle_Tissues"),
                 getOfflinePorgramObject("Liver_Meridian"),
                 getOfflinePorgramObject("Connective_Tissues"),
                 getOfflinePorgramObject("Regeneration")

             ]
                    },

        {
            category: 'athlete',
            name: translationsRoutines[$translate.preferredLanguage()]['immune-system-upper'],
            programs: [
                getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Lymphatic_System"),
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Respiratory_System")

             ]
                    },

        {
            category: 'spa',
            name: translationsRoutines[$translate.preferredLanguage()]['anti-aging-upper'],
            programs: [
                getOfflinePorgramObject("Bone_Tissues"),
                getOfflinePorgramObject("Anti_Aging"),

                 getOfflinePorgramObject("Energy_Balancing"),
                 getOfflinePorgramObject("Connective_Tissues")

             ]
                    },

        {
            category: 'spa',
            name: translationsRoutines[$translate.preferredLanguage()]['weight-control-upper'],
            programs: [
                              getOfflinePorgramObject("Addiction"),
                 getOfflinePorgramObject("Frustration"),
                getOfflinePorgramObject("Weight_Control"),
                 getOfflinePorgramObject("Triple_Warmer_Meridian")

             ]
                    },
        {
            category: 'spa',
            name: translationsRoutines[$translate.preferredLanguage()]['detoxification-upper'],
            programs: [
                              getOfflinePorgramObject("Digestive_System"),
                 getOfflinePorgramObject("Intestinal_Flora"),
                getOfflinePorgramObject("Detoxification"),
                 getOfflinePorgramObject("Mineral_Metabolic_Activity")

             ]
                    },

        {
            category: 'spa',
            name: translationsRoutines[$translate.preferredLanguage()]['skin-conditions-upper'],
            programs: [
                 getOfflinePorgramObject("Connective_Tissues"),
                getOfflinePorgramObject("Skin_Conditions"),
                 getOfflinePorgramObject("Detoxification"),

                 getOfflinePorgramObject("Lung_Meridian")

             ]
                    },

        {
            category: 'spa',
            name: translationsRoutines[$translate.preferredLanguage()]['hair-growth-upper'],
            programs: [
                        getOfflinePorgramObject("Kidney_Meridian"),
                getOfflinePorgramObject("Hair_Growth"),
                 getOfflinePorgramObject("Detoxification"),
                 getOfflinePorgramObject("Sacral_Chakra")

             ]
                    },

        {
            category: 'spa',
            name: translationsRoutines[$translate.preferredLanguage()]['low-physical-drive-upper'],
            programs: [
                                 getOfflinePorgramObject("Pericardium_Meridian"),
                 getOfflinePorgramObject("Adrenal_Gland"),
                getOfflinePorgramObject("Low_Physical_Drive"),
                 getOfflinePorgramObject("Circulatory_System")

             ]
                    },

        {
            category: 'spa',
            name: translationsRoutines[$translate.preferredLanguage()]['low-mental-drive-upper'],
            programs: [
                   getOfflinePorgramObject("Sacral_Chakra"),
                getOfflinePorgramObject("Low_Mental_Drive"),
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Nervous_System")

             ]
                    },



        {
            category: 'stress relief',
            name: translationsRoutines[$translate.preferredLanguage()]['stress-relief-upper'],
            programs: [
                                 getOfflinePorgramObject("Joy"),
                getOfflinePorgramObject("Energy_Balancing"),
                 getOfflinePorgramObject("Electro_Smog"),
                 getOfflinePorgramObject("Frustration")

             ]
                    },
        {
            category: 'stress relief',
            name: translationsRoutines[$translate.preferredLanguage()]['vitality-upper'],
            programs: [
                                 getOfflinePorgramObject("Nervous_System"),
                getOfflinePorgramObject("Joy"),
                 getOfflinePorgramObject("Energy_Booster"),
                 getOfflinePorgramObject("Vitality")

             ]
                    },
        {
            category: 'stress relief',
            name: translationsRoutines[$translate.preferredLanguage()]['sleep-enhancer-upper'],
            programs: [
                  getOfflinePorgramObject("Relaxation"),
                getOfflinePorgramObject("Sleep_Enhancer"),
                 getOfflinePorgramObject("Peace"),
                 getOfflinePorgramObject("Electro_Smog")

             ]
                    },

        {
            category: 'stress relief',
            name: translationsRoutines[$translate.preferredLanguage()]['energy-booster-upper'],
            programs: [
                getOfflinePorgramObject("Adrenal_Gland"),
                 getOfflinePorgramObject("Energy_Booster"),
                 getOfflinePorgramObject("Circulatory_System"),
                 getOfflinePorgramObject("Exhaustion")

             ]
                    },


        {
            category: 'stress relief',
            name: translationsRoutines[$translate.preferredLanguage()]['hypertension-upper'],
            programs: [
                     getOfflinePorgramObject("Pericardium_Meridian"),
                      getOfflinePorgramObject("Hypertension"),
                 getOfflinePorgramObject("Circulatory_System"),
                 getOfflinePorgramObject("Heart_Function")


             ]
                    },

        {
            category: 'stress relief',
            name: translationsRoutines[$translate.preferredLanguage()]['thyroid-upper'],
            programs: [
                 getOfflinePorgramObject("Electro_Smog"),
                getOfflinePorgramObject("Thyroid_Glands"),
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Throat_Chakra")

             ]
                    },
        {
            category: 'stress relief',
            name: translationsRoutines[$translate.preferredLanguage()]['low-mental-drive-upper'],
            programs: [
                 getOfflinePorgramObject("Sacral_Chakra"),
                getOfflinePorgramObject("Low_Mental_Drive"),
                 getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Nervous_System")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['regeneration-upper'],
            programs: [
                      getOfflinePorgramObject("Lymphatic_System"),
                getOfflinePorgramObject("Regeneration"),

                 getOfflinePorgramObject("Circulatory_System"),
                 getOfflinePorgramObject("Connective_Tissues")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['vitality-upper'],
            programs: [
                 getOfflinePorgramObject("Energy_Booster"),
                 getOfflinePorgramObject("Adrenal_Gland"),
                getOfflinePorgramObject("Vitality"),


                 getOfflinePorgramObject("Circulatory_System")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['joy-upper'],
            programs: [
                getOfflinePorgramObject("Peace"),
                    getOfflinePorgramObject("Frustration"),
                getOfflinePorgramObject("Joy"),

                 getOfflinePorgramObject("Metal_Element")


             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['sleep-enhancer-upper'],
            programs: [
                 getOfflinePorgramObject("Electro_Smog"),
                   getOfflinePorgramObject("Relaxation"),
                getOfflinePorgramObject("Sleep_Enhancer"),


                 getOfflinePorgramObject("Frustration")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['heart-function-upper'],
            programs: [
                  getOfflinePorgramObject("Fire_Element"),
                getOfflinePorgramObject("Heart_Function"),

                 getOfflinePorgramObject("Triple_Warmer_Meridian"),
                 getOfflinePorgramObject("Heart_Chakra")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['respiratory-system-upper'],
            programs: [
                getOfflinePorgramObject("Respiratory_System"),
                 getOfflinePorgramObject("Sinus_Cavities"),
                 getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Lung_Meridian")

             ]
                    },
        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['hypertension-upper'],
            programs: [
                   getOfflinePorgramObject("Pericardium_Meridian"),
                getOfflinePorgramObject("Hypertension"),

                 getOfflinePorgramObject("Heart_Chakra"),
                 getOfflinePorgramObject("Circulatory_System")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['glucose-metabolic-disorders-upper'],
            programs: [
                   getOfflinePorgramObject("Peace"),
                getOfflinePorgramObject("Glucose_Metabolic_Disorders"),

                 getOfflinePorgramObject("Spleen_Meridian"),
                 getOfflinePorgramObject("Energy_Balancing")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['hemorrhoids-upper'],
            programs: [
                   getOfflinePorgramObject("Hemorrhoids"),
                getOfflinePorgramObject("Constipation"),

                 getOfflinePorgramObject("Relaxation"),
                 getOfflinePorgramObject("Root_Chakra")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['urinary-system-upper'],
            programs: [
                  getOfflinePorgramObject("Kidney_Meridian"),
                getOfflinePorgramObject("Urinary_System/Cystitis"),
                 getOfflinePorgramObject("Urinary_Bladder_Meridian"),
                 getOfflinePorgramObject("Sacral_Chakra")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['cold-flu-upper'],
            programs: [
                  getOfflinePorgramObject("Immune_System"),
                getOfflinePorgramObject("Flu"),
                 getOfflinePorgramObject("Lymphatic_System"),
                 getOfflinePorgramObject("Respiratory_System")

             ]
                    },

        {
            category: 'senior',
            name: translationsRoutines[$translate.preferredLanguage()]['pain-upper'],
            programs: [
                  getOfflinePorgramObject("Nervous_System"),
                getOfflinePorgramObject("Pain_Conditions"),
                 getOfflinePorgramObject("Regeneration"),
                 getOfflinePorgramObject("Energy_Balancing")

             ]
                    },

        {
            category: 'chakra balancing',
            name: translationsRoutines[$translate.preferredLanguage()]['lower-chakra-balancing-upper'],
            programs: [
                getOfflinePorgramObject("Root_Chakra"),
                 getOfflinePorgramObject("Sacral_Chakra"),
                 getOfflinePorgramObject("Solar_Plexus_Chakra"),
                 getOfflinePorgramObject("Earth_Element")

             ]
                    },

        {
            category: 'chakra balancing',
            name: translationsRoutines[$translate.preferredLanguage()]['upper-chakra-balancing-upper'],
            programs: [
                getOfflinePorgramObject("Heart_Chakra"),
                 getOfflinePorgramObject("Throat_Chakra"),
                 getOfflinePorgramObject("Brow_Chakra"),
                 getOfflinePorgramObject("Crown_Chakra")

             ]
                    },

        {
            category: 'chakra balancing',
            name: translationsRoutines[$translate.preferredLanguage()]['meditation-basics-upper'],
            programs: [
                getOfflinePorgramObject("Meditation_1"),
                 getOfflinePorgramObject("Root_Chakra"),
                 getOfflinePorgramObject("Sacral_Chakra"),
                 getOfflinePorgramObject("Solar_Plexus_Chakra")

             ]
                    },

        {
            category: 'chakra balancing',
            name: translationsRoutines[$translate.preferredLanguage()]['meditation-medium-upper'],
            programs: [
                getOfflinePorgramObject("Meditation_2"),
                 getOfflinePorgramObject("Heart_Chakra"),
                 getOfflinePorgramObject("Throat_Chakra"),
                 getOfflinePorgramObject("Peace")

             ]
                    }, {
            category: 'chakra balancing',
            name: translationsRoutines[$translate.preferredLanguage()]['meditation-advanced-upper'],
            programs: [
                getOfflinePorgramObject("Meditation_3"),
                 getOfflinePorgramObject("Brow_Chakra"),
                 getOfflinePorgramObject("Crown_Chakra"),
                 getOfflinePorgramObject("Joy")

             ]
                    },

        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['earth-element-upper'],
            programs: [

                 getOfflinePorgramObject("Stomach_Meridian"),
                 getOfflinePorgramObject("Spleen_Meridian"),
                getOfflinePorgramObject("Earth_Element"),
                 getOfflinePorgramObject("Muscle_Tissues")
             ]
            },

        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['fire-element-upper'],
            programs: [

                 getOfflinePorgramObject("Heart_Meridian"),
                 getOfflinePorgramObject("Small_Intestine_Meridian"),
                getOfflinePorgramObject("Fire_Element"),
                 getOfflinePorgramObject("Circulatory_System")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['fire-element-upper'],
            programs: [

                 getOfflinePorgramObject("Pericardium_Meridian"),
                 getOfflinePorgramObject("Triple_Warmer_Meridian"),
                getOfflinePorgramObject("Fire_Element"),
                 getOfflinePorgramObject("Heart_Chakra")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['metal-element-upper'],
            programs: [

                 getOfflinePorgramObject("Lung_Meridian"),
                 getOfflinePorgramObject("Large_Intestine_Meridian"),
                getOfflinePorgramObject("Metal_Element"),
                 getOfflinePorgramObject("Skin_Conditions")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['water-element-upper'],
            programs: [

                 getOfflinePorgramObject("Kidney_Meridian"),
                 getOfflinePorgramObject("Urinary_Bladder_Meridian"),
                getOfflinePorgramObject("Water_Element"),
                 getOfflinePorgramObject("Bone_Tissues")
             ]
            },
        {
            category: 'elements',            
            name: translationsRoutines[$translate.preferredLanguage()]['wood-element-upper'],
            programs: [

                 getOfflinePorgramObject("Liver_Meridian"),
                 getOfflinePorgramObject("Gallbladder_Meridian"),
                getOfflinePorgramObject("Wood_Element"),
                 getOfflinePorgramObject("Eyesight")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['liver-function-upper'],
            programs: [

                 getOfflinePorgramObject("Liver_Meridian"),
                 getOfflinePorgramObject("Gallbladder_Meridian"),
                getOfflinePorgramObject("Detoxification"),
                 getOfflinePorgramObject("Solar_Plexus_Chakra")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['heart-function-upper'],
            programs: [

                 getOfflinePorgramObject("Heart_Meridian"),
                 getOfflinePorgramObject("Small_Intestine_Meridian"),
                getOfflinePorgramObject("Relaxation"),
                 getOfflinePorgramObject("Heart_Chakra")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['kidney-function-upper'],
            programs: [

                 getOfflinePorgramObject("Kidney_Meridian"),
                 getOfflinePorgramObject("Urinary_Bladder_Meridian"),
                getOfflinePorgramObject("Exhaustion"),
                 getOfflinePorgramObject("Sacral_Chakra")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['large-intestine-balancing-upper'],
            programs: [

                 getOfflinePorgramObject("Large_Intestine_Meridian"),
                 getOfflinePorgramObject("Lung_Meridian"),
                getOfflinePorgramObject("Immune_System"),
                 getOfflinePorgramObject("Solar_Plexus_Chakra")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['pericardium-flow-upper'],
            programs: [

                 getOfflinePorgramObject("Pericardium_Meridian"),
                 getOfflinePorgramObject("Triple_Warmer_Meridian"),
                getOfflinePorgramObject("Digestive_System"),
                 getOfflinePorgramObject("Heart_Chakra")
             ]
            },
        {
            category: 'elements',
            name: translationsRoutines[$translate.preferredLanguage()]['stomach-meridian-upper'],
            programs: [

                 getOfflinePorgramObject("Stomach_Meridian"),
                 getOfflinePorgramObject("Spleen_Meridian"),
                getOfflinePorgramObject("Frustration"),
                 getOfflinePorgramObject("Solar_Plexus_Chakra")
             ]
            }

                    ];

    localStorage.bubbleRoutineProgram1 = "";
    localStorage.bubbleRoutineProgram2 = "";
    localStorage.bubbleRoutineProgram3 = "";
    localStorage.bubbleRoutineProgram4 = "";

    $scope.toggleSidemenu = function () {
        var currentView = $ionicHistory.currentView();
        /*if (currentView.stateName !== "app.nowplaying") {*/
            $ionicSideMenuDelegate.toggleRight();
        /*}*/
    }

    $scope.$on('$ionicView.enter', function () {
        var currentView = $ionicHistory.currentView();
        /*if (currentView.stateName !== "app.nowplaying") {*/
            $scope.showMenuButton = true;
            $ionicSideMenuDelegate.canDragContent(true);
        /*} else {
            $scope.showMenuButton = false;
            $ionicSideMenuDelegate.canDragContent(false);
        }*/
    })

})


.controller('HomeViewController', function ($scope) {

    $scope.skipRegistration = function () {
        $location.path('app/routines');
        //$state.go('app.routines');
    }


})


.controller('RegisterViewController', function ($scope, $location, $state, User) {

    $scope.userData = {};

    $scope.attemptRegistration = function () {
        User.attemptUserRegistration($scope.userData).then(function (result) {
            if (result.data.status == "ok") {
                $location.path('app/routines');
            } else {
                gapAlert("Some fields are not valid", "Registration Unsuccessful");
            }
        });
    };

    $scope.attemptFacebookRegistraion = function () {
        facebookConnectPlugin.login(["public_profile", "email"],
            fbLoginSuccess,
            function (error) {
                gapAlert("" + error)
            }
        );
    }



    var fbLoginSuccess = function (userData) {
        facebookConnectPlugin.getAccessToken(function (token) {
            facebookConnectPlugin.api('/me?fields=id,email,name,gender', null,
                function (response) {
                    User.registerWithFacebook(response.email, response.id, '1986-05-28', response.gender).then(function (result) {
                        if (result.data.status == "ok") {
                            $location.path('app/routines');
                        }
                    });
                })
        }, function (err) {});
    }

    $scope.uploadPhoto = function (url) {
        uploadPhoto(url);
    }

    $scope.getPhoto = function () {
        getPhoto();
    }

})

.controller('MyAccountViewController', function ($scope, User, $location) {

    User.isUserLoggedIn().then(function (res) {
        if (res.data.status == "logged") {
            $scope.isUserLogged = true;
            $scope.userEmail = result.data.loggedUserEmail;
        } else {
            $scope.isUserLogged = false;
        }
    });

    $scope.loginData = {};

    $scope.attemptUserLogin = function () {

        User.attemptUserLogin($scope.loginData).then(function (result) {
            if (result.data.status == "ok") {
                $scope.isUserLogged = true;
                $scope.userEmail = result.data.loggedUserEmail;
            } else {
                gapAlert("Username or password not valid", "Login Unsuccessful");
            }
        });
    };

})


.controller('WifiScanViewController', function ($scope, MyMat) {

    //scanForWifi();
    $scope.scanForWifi = function () {
        /*WifiWizard.startScan(
            function (res) {},
            function (error) {}
        );*/
        WifiWizard.getCurrentSSID(function(handler){
            alert(handler.SSID);
        }, fail);
    };
    
    var testInterval;
    // check if mymat is connected
    MyMat.test().then(function successCallback(response) {
            // if is connected quitar imagen, textos y loading y poner status del mat
            showStatus(response);
        }, function errorCallback(response) {
            // if not display loading y quitar boton
            $('.activate-wifi-container').show();
            $('.mymat-status-container').hide();
            testInterval = setInterval(function(){
                MyMat.test().then(function successCallback(response) {
                    showStatus(response);
                });
            }, 2000);
    });
    
    showStatus = function(response){
        $('.activate-wifi-container').hide();
        $('.mymat-status-container').show();
        clearInterval(testInterval);
        
        var power = res.data.split("<p><h4>Power: ");
        power = power[1].split("</h4></p>");
        var coil1 = res.data.split("<tr><td>1.</td><td>");
        coil1 = coil1[1].split("</h4></p>");
        var coil2 = res.data.split("<tr><td>2.</td><td>");
        coil2 = coil2[1].split("</h4></p>");
        var coil3 = res.data.split("<tr><td>3.</td><td>");
        coil3 = coil3[1].split("</h4></p>");
        var coil4 = res.data.split("<tr><td>4.</td><td>");
        coil4 = coil4[1].split("</h4></p>");
        alert(power + ' ' + coil1 + ' ' + coil2 + ' ' + coil3 + ' ' + coil4);
    }
    
    showActivateWifi = function(){
        $('.activate-wifi-container').show();
        $('.mymat-status-container').hide();
    }
    

})



.controller('ContactUsViewController', function ($scope, User, ContactForm) {

    $scope.emailData = {};

    $scope.attemptSendMail = function () {

        ContactForm.attemptSendEmail($scope.emailData).then(function (result) {
            if (result.data.status == "ok") {
                gapAlert(translations[$translate.preferredLanguage()]['email-success-message'], translations[$translate.preferredLanguage()]['email-success-title']);
                $scope.emailData = {};
            } else {
                gapAlert(translations[$translate.preferredLanguage()]['email-error-message'], translations[$translate.preferredLanguage()]['email-error-title']);
            }
        });

    };

})



.controller('RoutinesViewController', function ($scope, $translate, $ionicModal, $window, $timeout, $location, Languages, Program) {
    $scope.bubblesCurrentState = {
        bubble1: false,
        bubble2: false,
        bubble3: false,
        bubble4: false
    };
    $scope.predefinedPrograms = {};
    $scope.predefinedPrograms = $scope.offlineGroups;
    $scope.routine = {};
    var p1Name = localStorage.bubbleRoutineProgram1.split("|");
    p1Name = p1Name[1];
    var p2Name = localStorage.bubbleRoutineProgram2.split("|");
    p2Name = p2Name[1];
    var p3Name = localStorage.bubbleRoutineProgram3.split("|");
    p3Name = p3Name[1];
    var p4Name = localStorage.bubbleRoutineProgram4.split("|");
    p4Name = p4Name[1];
    $scope.bubblesNames = [p1Name, p2Name, p3Name, p4Name];


    var currentlySelectedBubble = 0;

    $scope.programs = $scope.offlinePrograms
    updateBubblesState();

    //Program.getProgramsInLanguage('en').then(function(result){
    /*
    var html = "";
    angular.forEach(result, function(val){
        html = html+'{ name: "'+val.fields.name+'", apiName: "'+val.fields.apiName+'",runningTime: "'+val.fields.runningtime+'",description: "'+val.fields.description+'" }, <br/>';
    });
    $scope.pasted = html;
    */
    //$scope.programs = result;
    //  updateBubblesState();
    //});

    $scope.presetSelected = 'basic';
    
    $scope.selectPreSetProgram = function (category) {
        if ($scope.presetSelected !== category) {
            $scope.presetSelected = category;
        }
    }

    $ionicModal.fromTemplateUrl('templates/my-modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/program-info-modal.html', {
        scope: $scope,
        animation: 'fade-in'
    }).then(function (modal2) {
        $scope.modal2 = modal2;
    });

    $scope.selectBubble = function (bubble,showModal) {
        currentlySelectedBubble = bubble;
        if(showModal)
            $scope.modal.show();
    }

    $scope.addProgramToRoutine = function (idProgram, programName, programRunningTime, apiName) {

        var currentBubbleSlot = currentlySelectedBubble;
        if (currentBubbleSlot == 1) {
            localStorage.bubbleRoutineProgram1 = idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName;
            $scope.bubblesNames[0] = programName;
        } else if (currentBubbleSlot == 2) {
            localStorage.bubbleRoutineProgram2 = idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName;
            $scope.bubblesNames[1] = programName;
        } else if (currentBubbleSlot == 3) {
            localStorage.bubbleRoutineProgram3 = idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName;
            $scope.bubblesNames[2] = programName;
        } else if (currentBubbleSlot == 4) {
            localStorage.bubbleRoutineProgram4 = idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName;
            $scope.bubblesNames[3] = programName;
        }
        //updateBubblesState();
        $scope.modal.hide();
        $scope.modal2.hide();
        $timeout(function () {
            updateBubblesState();
        }, 500);
    }

    $scope.removeProgramFromRoutine = function (idBubble) {
        gapConfirmAlert(translations[$translate.preferredLanguage()]['are-you-sure-program'], 
            translations[$translate.preferredLanguage()]['remove-program'], 
            translations[$translate.preferredLanguage()]['yes'], 
            translations[$translate.preferredLanguage()]['cancel'], function (buttonIndex) {
            if (buttonIndex == 1) {
                if (idBubble == 1) {
                    localStorage.bubbleRoutineProgram1 = "";
                    $scope.bubblesNames[0] = "";
                } else if (idBubble == 2) {
                    localStorage.bubbleRoutineProgram2 = "";
                    $scope.bubblesNames[1] = "";
                } else if (idBubble == 3) {
                    localStorage.bubbleRoutineProgram3 = "";
                    $scope.bubblesNames[2] = "";
                } else if (idBubble == 4) {
                    localStorage.bubbleRoutineProgram4 = "";
                    $scope.bubblesNames[3] = "";
                }
                $timeout(function () {
                    updateBubblesState();
                }, 100);
            }
        });
    }

    $scope.runRoutine = function () {
        if (areAllSlotsFull()) {
            $location.path('app/wifi');
            //$location.path('app/nowplaying');
        } else {
            gapAlert('Please add four programs to your routine', 'Could not run routine');
        }
    }

    function areAllSlotsFull() {
        var counHelper = 0;
        if (localStorage.bubbleRoutineProgram1.length > 0) {
            counHelper++;
        }
        if (localStorage.bubbleRoutineProgram2.length > 0) {
            counHelper++;
        }
        if (localStorage.bubbleRoutineProgram3.length > 0) {
            counHelper++;
        }
        if (localStorage.bubbleRoutineProgram4.length > 0) {
            counHelper++;
        }
        if (counHelper >= 4) {
            return true;
        } else {
            return false;
        }
    }

    function attachNamesToBubbles() {


        var bubble1ProgramNameTemp = localStorage.bubbleRoutineProgram1.split("|");
        $scope.bubblesNames[0] = bubble1ProgramNameTemp[1];


        var bubble2ProgramNameTemp = localStorage.bubbleRoutineProgram2.split("|");
        $scope.bubblesNames[1] = bubble2ProgramNameTemp[1];


        var bubble3ProgramNameTemp = localStorage.bubbleRoutineProgram3.split("|");
        $scope.bubblesNames[2] = bubble3ProgramNameTemp[1];


        var bubble4ProgramNameTemp = localStorage.bubbleRoutineProgram4.split("|");
        $scope.bubblesNames[3] = bubble4ProgramNameTemp[1];


    }

    function updateBubblesState() {

        if (localStorage.bubbleRoutineProgram1.length > 0) {
            $scope.bubblesCurrentState.bubble1 = true;
        } else {
            $scope.bubblesCurrentState.bubble1 = false;
        }

        if (localStorage.bubbleRoutineProgram2.length > 0) {
            $scope.bubblesCurrentState.bubble2 = true;
        } else {
            $scope.bubblesCurrentState.bubble2 = false;
        }

        if (localStorage.bubbleRoutineProgram3.length > 0) {
            $scope.bubblesCurrentState.bubble3 = true;
        } else {
            $scope.bubblesCurrentState.bubble3 = false;
        }

        if (localStorage.bubbleRoutineProgram4.length > 0) {
            $scope.bubblesCurrentState.bubble4 = true;
        } else {
            $scope.bubblesCurrentState.bubble4 = false;
        }

        //attachNamesToBubbles();


    }

    $scope.saveCurrentRoutine = function () {
        if (areAllSlotsFull()) {
            var programs = {
                routineName: $scope.routine.name,
                program1: localStorage.bubbleRoutineProgram1,
                program2: localStorage.bubbleRoutineProgram2,
                program3: localStorage.bubbleRoutineProgram3,
                program4: localStorage.bubbleRoutineProgram4,
            };
            Program.saveCurrentRoutine(programs).then(function (result) {
                if (result.data.status == "ok") {
                    gapAlert("Routine was saved !");
                } else {
                    gapAlert(result.data.error);
                }
            });
        } else {
            gapAlert('Please add four programs to your routine', "Coult not run routine");
        }
    }

    $scope.moreProgramInfo = function (programId, programName, programRunningTime, programDescription) {
        $scope.modal2.show();
        $scope.modalProgramId = programId;
        $scope.modalProgramName = programName;
        $scope.modalProgramRunningTime = programRunningTime;
        $scope.modalProgramDescription = programDescription.replace(/\n/g, "<br />");
    }

    $scope.closeProgramInfoModal = function () {
        $scope.modal2.hide();
    }


    $scope.insertPreSetProgram = function (program1, program2, program3, program4) {


        $scope.selectBubble(1);
        $scope.addProgramToRoutine("", program1.name, program1.runningtime, program1.apiName);

        $scope.selectBubble(2);
        $scope.addProgramToRoutine("", program2.name, program2.runningtime, program2.apiName);

        $scope.selectBubble(3);
        $scope.addProgramToRoutine("", program3.name, program3.runningtime, program3.apiName);

        $scope.selectBubble(4);
        $scope.addProgramToRoutine("", program4.name, program4.runningtime, program4.apiName);

        $timeout(function () {
            updateBubblesState();
        }, 500);

        /*
        localStorage.bubbleRoutineProgram1 = program1.name+"|"+program1.name+"|"+program1.runningtime+"|"+program1.apiName;
        $scope.bubblesNames[0] = program1.name;
        localStorage.bubbleRoutineprogram2 = program2.name+"|"+program2.name+"|"+program2.runningtime+"|"+program2.apiName;
        $scope.bubblesNames[1] = program2.name;
        localStorage.bubbleRoutineprogram3 = program3.name+"|"+program3.name+"|"+program3.runningtime+"|"+program3.apiName;
        $scope.bubblesNames[2] = program3.name;
        localStorage.bubbleRoutineprogram4 = program4.name+"|"+program4.name+"|"+program4.runningtime+"|"+program4.apiName;
        $scope.bubblesNames[3] = program4.name;
        $scope.modal.hide();
        $timeout(function(){
              updateBubblesState();
        },500); 
        */

    }

})



.controller('NowPlayingViewController', function ($scope, $ionicSideMenuDelegate, $timeout, $location, Program, MyMat) {

    $ionicSideMenuDelegate.canDragContent(true);

    $scope.justStarted = false;

    $scope.allProgramsTimer = 0;
    $scope.totalRunningTime = 0;
    $scope.displayRunningTime = 0;
    $scope.program1CurrentTime = 0;
    $scope.program2CurrentTime = 0;
    $scope.program3CurrentTime = 0;
    $scope.program4CurrentTime = 0;

    $scope.program1 = localStorage.bubbleRoutineProgram1.split("|");
    $scope.program1[4] = $scope.program1[2];
    $scope.program1[2] = convertTimeToSecond($scope.program1[2]);
    $scope.program1[3] = $scope.program1[2] * 1000;
    $scope.program2 = localStorage.bubbleRoutineProgram2.split("|");
    $scope.program2[4] = $scope.program2[2];
    $scope.program2[2] = convertTimeToSecond($scope.program2[2]);
    $scope.program2[3] = $scope.program2[2] * 1000;
    $scope.program3 = localStorage.bubbleRoutineProgram3.split("|");
    $scope.program3[4] = $scope.program3[2];
    $scope.program3[2] = convertTimeToSecond($scope.program3[2]);
    $scope.program3[3] = $scope.program3[2] * 1000;
    $scope.program4 = localStorage.bubbleRoutineProgram4.split("|");
    $scope.program4[4] = $scope.program4[2];
    $scope.program4[2] = convertTimeToSecond($scope.program4[2]);
    $scope.program4[3] = $scope.program4[2] * 1000;
    var programs = [
        localStorage.bubbleRoutineProgram1,
        localStorage.bubbleRoutineProgram2,
        localStorage.bubbleRoutineProgram3,
        localStorage.bubbleRoutineProgram4
    ];

    $scope.program1CurrentTimeDecreasing = $scope.program1[2];
    $scope.program2CurrentTimeDecreasing = $scope.program2[2];
    $scope.program3CurrentTimeDecreasing = $scope.program3[2];
    $scope.program4CurrentTimeDecreasing = $scope.program4[2];

    $scope.program1CurrentTimeDecreasingAsTime = convertSecondsToTime($scope.program1CurrentTimeDecreasing);
    $scope.program2CurrentTimeDecreasingAsTime = convertSecondsToTime($scope.program2CurrentTimeDecreasing);
    $scope.program3CurrentTimeDecreasingAsTime = convertSecondsToTime($scope.program3CurrentTimeDecreasing);
    $scope.program4CurrentTimeDecreasingAsTime = convertSecondsToTime($scope.program4CurrentTimeDecreasing);

    $scope.programs = programs;

    if($scope.program1[2] > $scope.program2[2] && $scope.program1[2] > $scope.program2[2] && $scope.program1[2] > $scope.program3[2] && $scope.program1[2] > $scope.program4[2])
        $scope.displayRunningTime = convertSecondsToTime($scope.program1[2]);
    else if($scope.program2[2] > $scope.program3[2] && $scope.program2[2] > $scope.program4[2])
        $scope.displayRunningTime = convertSecondsToTime($scope.program2[2]);
    else if($scope.program3[2] > $scope.program4[2])
        $scope.displayRunningTime = convertSecondsToTime($scope.program3[2]);
    else
        $scope.displayRunningTime = convertSecondsToTime($scope.program4[2]);

    initRoutine(programs);

    /*$timeout(function () {
        progressCircles();
    }, 500);*/

    function initRoutine(programs) {

        MyMat.startRoutine(programs).then(function (res) {
            // extracting total time of routine from returned html page
            var temp = res.data.split("<p><h3>Running time: ");
            temp = temp[1].split("</h3></p>");
            var runningTimeInSeconds = convertTimeToSecond(temp[0]);
            $scope.totalRunningTime = runningTimeInSeconds;
            console.log("total:" + $scope.totalRunningTime);
            // extracting program 1 time
        });
    };

    function progressCircles() {

        $scope.program1CurrentTime = $scope.program1CurrentTime + 1;
        $scope.program2CurrentTime = $scope.program2CurrentTime + 1;
        $scope.program3CurrentTime = $scope.program3CurrentTime + 1;
        $scope.program4CurrentTime = $scope.program4CurrentTime + 1;

        if ($scope.program1CurrentTimeDecreasing > 0) {
            $scope.program1CurrentTimeDecreasing = $scope.program1CurrentTimeDecreasing - 1;
        }
        $scope.program1CurrentTimeDecreasingAsTime = convertSecondsToTime($scope.program1CurrentTimeDecreasing);
        if ($scope.program2CurrentTimeDecreasing > 0) {
            $scope.program2CurrentTimeDecreasing = $scope.program2CurrentTimeDecreasing - 1;
        }
        $scope.program2CurrentTimeDecreasingAsTime = convertSecondsToTime($scope.program2CurrentTimeDecreasing);
        if ($scope.program3CurrentTimeDecreasing > 0) {
            $scope.program3CurrentTimeDecreasing = $scope.program3CurrentTimeDecreasing - 1;
        }
        $scope.program3CurrentTimeDecreasingAsTime = convertSecondsToTime($scope.program3CurrentTimeDecreasing);
        if ($scope.program4CurrentTimeDecreasing > 0) {
            $scope.program4CurrentTimeDecreasing = $scope.program4CurrentTimeDecreasing - 1;
        }
        $scope.program4CurrentTimeDecreasingAsTime = convertSecondsToTime($scope.program4CurrentTimeDecreasing);

        $scope.allProgramsTimer = $scope.allProgramsTimer + 1;

        console.log($scope.allProgramsTimer);

        //if($scope.allProgramsTimer  ==  $scope.totalRunningTime) {
        if ($scope.program1CurrentTimeDecreasing == 0 && $scope.program2CurrentTimeDecreasing == 0 && $scope.program3CurrentTimeDecreasing == 0 && $scope.program4CurrentTimeDecreasing == 0) {
            /*var media = new Media("audio/end.wav");
            media.play();*/
            $location.path('app/done');
        } else {
            $timeout(function () {
                progressCircles();
            }, 1000);
        }
    }

    function convertTimeToSecond(hour) {
        var times = hour.split(":");
        var minutes = times[0];
        var seconds = times[1];
        seconds = parseInt(seconds, 10) + (parseInt(minutes, 10) * 60);
        return seconds;
    }


    function convertSecondsToTime(timeInSeconds) {

        var minutes = "0" + Math.floor(timeInSeconds / 60);
        var seconds = "0" + (timeInSeconds - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    }


})



.controller('LanguagesViewController', function ($scope, $ionicModal, Program) {




})



.controller('FavoritesViewController', function ($scope, $location, $timeout, $window, Program) {


    $scope.favorites = {};
    $timeout(function () {
        getUserFavoritePrograms();
    }, 300);

    function getUserFavoritePrograms() {
        Program.getUserFavoritePrograms().then(function (result) {
            $scope.favorites = result.data.favs;
        });
    };

    $scope.removeRoutine = function (idProgram) {
        gapConfirmAlert(translations[$translate.preferredLanguage()]['are-you-sure-routine'], 
            translations[$translate.preferredLanguage()]['remove-routine'], 
            translations[$translate.preferredLanguage()]['yes'], 
            translations[$translate.preferredLanguage()]['cancel'], function (buttonIndex) {
            if (buttonIndex == 1) {
                Program.removeFavoriteProgram(idProgram).then(function (result) {
                    if (result.data.status == "ok") {
                        getUserFavoritePrograms();
                    }
                });
            }
        });
    }

    $scope.startFavoriteRoutine = function (favs) {
        localStorage.bubbleRoutineProgram1 = favs.programs[0].program_contentful_id + "|" + favs.programs[0].program_name + "|" + favs.programs[0].program_running_time;
        localStorage.bubbleRoutineProgram2 = favs.programs[1].program_contentful_id + "|" + favs.programs[1].program_name + "|" + favs.programs[1].program_running_time;
        localStorage.bubbleRoutineProgram3 = favs.programs[2].program_contentful_id + "|" + favs.programs[2].program_name + "|" + favs.programs[2].program_running_time;
        localStorage.bubbleRoutineProgram4 = favs.programs[3].program_contentful_id + "|" + favs.programs[3].program_name + "|" + favs.programs[3].program_running_time;
        $timeout(function () {
            $location.path('app/routines');
        }, 500);
    }


})



.controller('ForgotPasswordViewController', function ($scope, $ionicModal, User, Program) {

    $scope.user = {};

    $scope.sendPasswordReminder = function () {
        User.sendPasswordReminder($scope.user.email).then(function (result) {});
    }


});
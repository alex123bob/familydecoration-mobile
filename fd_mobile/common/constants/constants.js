(function() {
  'use strict';

  angular
    .module('fdmobile')
    .constant('CONSTANT', {
      'TODAY': new Date(),

      'COMMA': ',',

      'NOTIFICATION_FREQUENCY_ANDROID': 15,
      'NOTIFICATION_FREQUENCY_IOS': 'hour',

      'MOBILE_REGEXP': /^1[3|4|5|7|8]\d{9}$/,
      'PASSWORD_REGEXP': /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{8,16}$/,

      'IS_IOS': ionic.Platform.isIOS(),
      'IS_ANDROID': ionic.Platform.isAndroid(),

      'DEFAULT_PAGE_SIZE': 10,
      'SORT_DIRECTION_ASC': 'ASC',
      'SORT_DIRECTION_DESC': 'DESC',

      'HEART_RATE_CODE': '1101',
      'BLOOD_PRESSURE_CODE': '1201/1202',
      'SYSTOLIC_BLOOD_PRESSURE_CODE': '1201',
      'DIASTOLIC_BLOOD_PRESSURE_CODE': '1202',
      'FASTING_BLOOD_GLUCOSE_CODE': '1301',
      'POSTPRANDIAL_BLOOD_GLUCOSE_CODE': '1302',
      'MEASUREMENT_BLUETOOTH_CODE': '1303',
      'MEASUREMENT_CHOSE_CODE': '1304',
      'WEIGHT_CODE': '1401',
      'MEASUREMENT_CONDITION_MORNING_CODE': '101',
      'MEASUREMENT_CONDITION_EVENING_CODE': '102',

      'CAREPLAN_MEDICATION_ORDER_STATUS_ACTIVE': '102',
      'CAREPLAN_MEDICATION_ORDER_STATUS_STOPPED': '106',

      'CAREPLAN_ACTIVITY_FOLLOWUP': '10001',
      'CAREPLAN_ACTIVITY_MEDICATION_INTAKE': '20001',
      'CAREPLAN_ACTIVITY_BLOOD_PRESSURE_MEASUREMENT': '30001',
      'CAREPLAN_ACTIVITY_HEART_RATE_MEASUREMENT': '30002',
      'CAREPLAN_ACTIVITY_WEIGHT_MEASUREMENT': '30003',
      'CAREPLAN_ACTIVITY_FASTING_GLUCOSE_MEASUREMENT': '30004',
      'CAREPLAN_ACTIVITY_POSTPRANDIAL_GLUCOSE_MEASUREMENT': '30005',
      'CAREPLAN_ACTIVITY_EDUCATION_COACHING': '40001',
      'CAREPLAN_ACTIVITY_SYMPTOM': '50001',

      'TIMESLOT_ACTIVITY_ACTIVE': '101',
      'TIMESLOT_ACTIVITY_INACTIVE': '102',

      'CHART_WEEKLY': 6,
      'CHART_MONTHLY': 29,

      'REPORT_IMAGE_THUMBNAIL_WEIGHT': '320',
      'REPORT_IMAGE_THUMBNAIL_HEIGHT': '240',
      'REPORT_IMAGE_THUMBNAIL_RESOLUTION': 'q50',

      /*inject:constants*/
      'HOST': '130.147.219.52',
      'PORT': '8888',
      'LOGGER': 'ON',
      'NUTRITION_HOST': '130.147.219.52',
      'NUTRITION_PORT': '9999'
      /*endinject*/
    });
})();

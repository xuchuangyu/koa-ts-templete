import styles from '@/assets/css/var.less'
/**
 * UI配置
 */
const config = {
  primaryColor: styles['primary-color'],
  primaryBg: styles['primary-bg'],
  /* tag */
  tagDefaultColor: styles['default-bg'],
  tagTextDefaultColor: styles['default-color'],
  tagPrimaryColor: styles['primary-bg'],
  tagTextPrimaryColor: styles['primary-color'],
  tagSuccessColor: styles['success-bg'],
  tagTextSuccessColor: styles['success-color'],
  tagDangerColor: styles['danger-bg'],
  tagTextDangerColor: styles['danger-color'],
  tagWarningColor: styles['warning-bg'],
  tagTextWarningColor: styles['warning-color'],
  /* button */
  buttonBorderWidth: '2px',
  buttonPrimaryBorderColor: styles['primary-color'],
  buttonPrimaryBackgroundColor: styles['primary-color'],
  buttonDefaultBorderColor: styles['primary-border-color'],
  buttonDefaultHeight: '48px',
  buttonBorderRadius: '8px',
  buttonNormalFontSize: '16px',
  checkboxCheckedIconColor: styles['primary-color'],
  checkboxSize: '21px',
  cellBorderColor: styles['primary-border-color'],
  cellFontSize: '16px',
  fieldLabelWidth: '81px',
  fieldLabelColor: styles['black-color'],
  cellVerticalPadding: '12px',
  cellHorizontalPadding: '16px',
  fieldErrorMessageColor: 'rgba(0,0,0,0.26)',
  fieldErrorMessageFontSize: '12px',
  /* picker */
  pickerConfirmActionColor: styles['primary-color'],
  pickerActionFontSize: '16px',
  pickerOptionFontSize: '16px',
  /* radio */
  radioCheckedIconColor: styles['primary-color'],
  /* search */
  searchInputHeight: '40px',
  searchPadding: '8px 16px',
  searchActionFontSize: '16px',
  searchActionPadding: '0 16px 0 16px',
  searchContentBackgroundColor: '#F3F3F3',
  /* dialog */
  dialogHeaderFontWeight: 'bold',
  dialogBorderRadius: '8px',
  /* steps */
  paddingXl: '42px',
  StepFinishLineColor: styles['primary-color'],
  StepActiveColor: styles['black-color'],
  /* tab */
  tabsBottomBarHeight: '2px',
  tabActiveTextColor: styles['primary-color']
}
for (const key in config) {
  if (config[key].includes('px')) {
    // 处理含有空格的 字符
    if (/\s/g.test(config[key])) {
      const arr = config[key].split(' ')
      for (let item of arr) {
        item = px2vw(item)
      }
      config[key] = arr.join(' ')
    } else {
      config[key] = px2vw(config[key])
    }
  }
}
export default config

// 根据vw适配
export function px2vw (px) {
  if (/%/gi.test(px)) {
    // 有百分号%，特殊处理，表述pc是一个有百分号的数，比如：90%
    return px
  } else {
    return parseFloat(px) / 3.75 + 'vw' // 这里的3.75，和rootValue值对应
  }
}

const rootTheme = {
  '--van-toast-background-color': 'rgba(0,0,0, .6)',
  '--van-toast-default-width': px2vw('136px'),
  '--van-toast-default-min-height': px2vw('130px'),
  '--van-toast-default-padding': 0
}
export const useRootTheme = () => {
  const el = document.documentElement
  for (const key in rootTheme) {
    el.style.setProperty(key, rootTheme[key])
  }
}

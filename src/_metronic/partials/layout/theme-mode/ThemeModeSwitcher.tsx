import clsx from 'clsx'
import {KTIcon} from '../../../helpers'
import {ThemeModeComponent} from '../../../assets/ts/layout'
import {ThemeModeType, useThemeMode} from './ThemeModeProvider'

/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
  toggleBtnClass?: string
  toggleBtnIconClass?: string
  menuPlacement?: string
  menuTrigger?: string
}

const systemMode = ThemeModeComponent.getSystemMode() as 'light' | 'dark'

const ThemeModeSwitcher = ({
  toggleBtnClass = '',
  toggleBtnIconClass = 'fs-1',
  menuPlacement = 'bottom-end',
  menuTrigger = "{default: 'click', lg: 'hover'}",
}: Props) => {
  const {mode, menuMode, updateMode, updateMenuMode} = useThemeMode()
  const calculatedMode = mode === 'system' ? systemMode : mode
  const switchMode = (_mode: ThemeModeType) => {
    updateMenuMode(_mode)
    updateMode(_mode)
  }

  return (
    <>
      {/* begin::Menu toggle */}
      <a
        href='#'
        className={clsx('btn btn-icon ', toggleBtnClass)}
      >
        {calculatedMode === 'dark' && (
          <div onClick={() => switchMode('light')}>
            <KTIcon iconName='moon' className={clsx('theme-light-hide', toggleBtnIconClass)} />
          </div>
        )}

        {calculatedMode === 'light' && (
          <div onClick={() => switchMode('dark')}>
            <KTIcon iconName='night-day' className={clsx('theme-dark-hide', toggleBtnIconClass)} />
          </div>
        )}
      </a>
      {/* begin::Menu toggle */}
    </>
  )
}

export {ThemeModeSwitcher}

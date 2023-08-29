import clsx from "clsx";
import { KTIcon } from "../../../helpers";
import { ThemeModeComponent } from "../../../assets/ts/layout";
import { ThemeModeType, useThemeMode } from "./ThemeModeProvider";

/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
  toggleBtnClass?: string;
  toggleBtnIconClass?: string;
  menuPlacement?: string;
  menuTrigger?: string;
};

const systemMode = ThemeModeComponent.getSystemMode() as "light" | "dark";

const ThemeModeSwitcher = ({
  toggleBtnClass = "",
  toggleBtnIconClass = "fs-1",
  menuPlacement = "bottom-end",
  menuTrigger = "{default: 'click', lg: 'hover'}",
}: Props) => {
  const { mode, menuMode, updateMode, updateMenuMode } = useThemeMode();
  const calculatedMode = mode === "system" ? systemMode : mode;
  const switchMode = (_mode: ThemeModeType) => {
    updateMenuMode(_mode);
    updateMode(_mode);
  };

  return (
    <>
      {/* begin::Menu toggle */}
      <div className="menu-link px-5 position-relative"  onClick={() => calculatedMode === "dark" ? switchMode("light") : switchMode("dark")} >
        Mode
        <div className="position-absolute fs-8 px-3 py-2 translate-middle-y top-50 end-0">
          <a href="#" className={clsx("btn btn-icon ", toggleBtnClass)}>
            {calculatedMode === "dark" && (
              <div>
                <KTIcon
                  iconName="moon"
                  className={clsx("theme-light-hide", toggleBtnIconClass)}
                />
              </div>
            )}

            {calculatedMode === "light" && (
              <div>
                <KTIcon
                  iconName="night-day"
                  className={clsx("theme-dark-hide", toggleBtnIconClass)}
                />
              </div>
            )}
          </a>
        </div>
      </div>

      {/* begin::Menu toggle */}
    </>
  );
};

export { ThemeModeSwitcher };

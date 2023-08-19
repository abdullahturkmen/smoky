import React from 'react'

type Props = {}

const AdvancedSettingsScreen: React.FC<Props> = ({}) => {
  return (
    <>
     <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
  <li className="nav-item">
    <a
      className="nav-link active"
      data-bs-toggle="tab"
      href="#kt_tab_pane_4"
    >
      Google Analytics
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_5"
    >
      Goals
    </a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div
    className="tab-pane fade show active"
    id="kt_tab_pane_4"
    role="tabpanel"
  >
    Et et consectetur ipsum labore excepteur est proident excepteur
    ad velit occaecat qui minim occaecat veniam. Fugiat veniam
    incididunt anim aliqua enim pariatur veniam sunt est aute sit
    dolor anim. Velit non irure adipisicing aliqua ullamco irure
    incididunt irure non esse consectetur nostrud minim non minim
    occaecat. Amet duis do nisi duis veniam non est eiusmod tempor
    incididunt tempor dolor ipsum in qui sit.
  </div>
  <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
    Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
    irure officia enim reprehenderit. Magna duis labore cillum sint
    adipisicing exercitation ipsum. Nostrud ut anim non exercitation
    velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint
    velit ullamco magna consequat voluptate minim amet aliquip ipsum
    aute laboris nisi. Labore labore veniam irure irure ipsum
    pariatur mollit magna in cupidatat dolore magna irure esse
    tempor ad mollit. Dolore commodo nulla minim amet ipsum officia
    consectetur amet ullamco voluptate nisi commodo ea sit eu.
  </div>
</div>
    </>
  )
}

export default AdvancedSettingsScreen

import React from "react";

type Props = {};

const InstallScreen: React.FC<Props> = ({}) => {
  return (
    <>
      <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#kt_tab_pane_4"
          >
            Custom
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5">
            GTM
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6">
            Shopify
          </a>
        </li>
      </ul>
      <h1>Install popup on abdullahturkmen.com</h1>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="kt_tab_pane_4"
          role="tabpanel"
        >
          <span>Embed code that works on all website platforms.</span>
          <blockquote>
  <pre>
    <code>
    &lt;html&gt;
              &lt;body&gt;
                &lt;div&gt;&lt;/div&gt;
              &lt;/body&gt;
            &lt;/html&gt;
    </code>
  </pre>
</blockquote>
            
           
            
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
          GTM Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
          irure officia enim reprehenderit. Magna duis labore cillum sint
          adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit
          laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit
          ullamco magna consequat voluptate minim amet aliquip ipsum aute
          laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit
          magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore
          commodo nulla minim amet ipsum officia consectetur amet ullamco
          voluptate nisi commodo ea sit eu.
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
          Shopify Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
          irure officia enim reprehenderit. Magna duis labore cillum sint
          adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit
          laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit
          ullamco magna consequat voluptate minim amet aliquip ipsum aute
          laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit
          magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore
          commodo nulla minim amet ipsum officia consectetur amet ullamco
          voluptate nisi commodo ea sit eu.
        </div>
      </div>

      <span className="mt-2 d-block">Copy and paste the <strong>embed code above just before the
closing <code>&lt;/body&gt;</code> tag</strong> of your website template file.</span>


    </>
  );
};

export default InstallScreen;

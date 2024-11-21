import React, { useState } from "react";
import TempContent from "./TempContent";
import AssignOperators from "./AssignOperators";
import { TabsContainer, TabButton, ContentContainer} from '../../styles/components/SettingsTabsStyles';

const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState("temp");

  return (
    <div>
      <TabsContainer>
        <TabButton active={activeTab === "temp"} onClick={() => setActiveTab("temp")}>
          Temperature thresholds
        </TabButton>
        <TabButton active={activeTab === "assign"} onClick={() => setActiveTab("assign")}>
          Assign Operators
        </TabButton>
      </TabsContainer>

      <ContentContainer>
        {activeTab === "temp" && <TempContent />}
        {activeTab === "assign" && <AssignOperators />}
      </ContentContainer>
    </div>
  );
};

export default SettingsTabs;

import React from "react";

class Tabs extends React.Component {
    static defaultProps = {
      tabs: [],
    };
    state = {
      currentTabIndex: 0
    };
    /* not showing all the methods */
    renderContent() {
      const currentTab = this.props.tabs[this.state.currentTabIndex]
      return (
        <div className='content'>
          {currentTab.content}
        </div>
      )
    }
    handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
      }
      renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
    }
}

export default Tabs;
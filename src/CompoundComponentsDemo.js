import React, { Component } from 'react';

class Tabs extends Component {
  state = {
    currentTabIndex: 0
  }

  render() {
    const { currentTabIndex } = this.state;
    const tabsOnTop = React.Children.toArray(this.props.children)[0].type === TabButtons
    const childrenArray = React.Children.toArray(this.props.children).filter(x => x.type === TabsPane);
    const nav = <nav>
      {childrenArray.map((child, index) => {
        return (
          <span className="nav-item" key={index} onClick={
            () => this.setState({ currentTabIndex: index })
          }>{child.props.label || `Tab ${index + 1}`}</span>
        )
      })}
    </nav>;

    return (
      <div>
        {tabsOnTop && nav}
        {childrenArray[currentTabIndex]}
        {!tabsOnTop && nav}
      </div>
    );
  }
}

class TabsPane extends Component {
  render() {
    return (
      <div className="tab">{this.props.children}</div>
    );
  }
}

function TabButtons() {}

export default class CompoundComponentsDemo extends Component {
  render() {
    return (
      <div>
        <h1>Compound Components Demo</h1>
        <Tabs>
          <TabsPane label={<span>🚀</span>}>
            Cats
            <div><img src="https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a2a995036e33afabaf0a03c2476de17&auto=format&fit=crop&w=1650&q=80" /></div>
          </TabsPane>
          <TabsPane>
            T$ the cat
            <div><img src="https://avatars0.githubusercontent.com/u/31582611?s=460&v=4" /></div>
          </TabsPane>
          <TabsPane>
            Felix the cat
            <div><img src="https://vignette.wikia.nocookie.net/felixthecat/images/5/52/302900_231781686889200_1784968778_n.jpg/revision/latest?cb=20121110013949" /></div>
          </TabsPane>
          <TabButtons />
        </Tabs>
      </div>
    );
  }
}
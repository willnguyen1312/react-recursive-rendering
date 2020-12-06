import { FC, useState } from "react";
import { MdKeyboardBackspace } from 'react-icons/md'

import { sampleMenuData } from './mockedData'
import { findNodeById } from './utils'

import styles from "./App.module.css";

const App: FC = () => {
  const [currentNode, setCurrentNode] = useState(sampleMenuData[0])

  const children = currentNode.children || []
  const hasParent = !!currentNode.parent

  const onNodeClick = (label: string) => () => {
    const foundNode = findNodeById(sampleMenuData, node => node.label === label)

    if (foundNode) {
      setCurrentNode(foundNode)
    }
  }

  return (
    <div className={styles.app}>
      <h4 style={{
        borderBottom: '1px solid red',
        display: "inline-flex",
        alignItems: 'center'
      }}>{hasParent && <MdKeyboardBackspace onClick={() => {
        const foundNode = findNodeById(sampleMenuData, node => node.label === currentNode.parent)
        if (foundNode) {
          setCurrentNode(foundNode)
        }
      }} style={{
        cursor: 'pointer'
      }} />} {currentNode.label}</h4>

      {children.map(node => {
        return <h5 onClick={onNodeClick(node.label)} style={{
          marginTop: 10,
          cursor: 'pointer'
        }}>{node.label}</h5>
      })}
    </div>
  );
};

export default App;

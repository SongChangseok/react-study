import React from "react";
import faker from "faker";
import createArray from "./common/Array";
import { List } from "./common/commonComponent";
import { FixedSizeList } from "react-window";

const bigList = createArray(5000).map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

export default function VirtualizedListTest() {
  // const renderItem = item => (
  //     <div style={{ display: "flex" }}>
  //         <img src={item.avatar} alt={item.name} width={50} />
  //         <p>
  //             {item.name} - {item.email}
  //         </p>
  //     </div>
  // );

  // return <List data={bigList} renderItem={renderItem} />;
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, display: "flex" }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}

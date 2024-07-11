import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
};

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { id: 1, value: "", label: "Relevance" },
    { id: 2, value: "name", label: "Name" },
    { id: 3, value: "-added", label: "Date added" },
    { id: 4, value: "-released", label: "Release Date" },
    { id: 5, value: "-metacritic", label: "Popularity" },
    { id: 6, value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedOrder,
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => {
          return (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.id}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
export default SortSelector;

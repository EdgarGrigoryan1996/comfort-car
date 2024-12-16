import React, { Dispatch, FC } from "react";
import s from "./FilterBlock.module.scss";

import { FilterDataType } from "../../../../types/FilterDataType";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FilterBlockPropsType } from "./FilterBlockPropsType";
import { BiCheckCircle } from "react-icons/bi";

export const FilterBlock: FC<FilterBlockPropsType> = (
  props: FilterBlockPropsType,
) => {
  const changeChecked = (
    currentData: FilterDataType[],
    setCurrentData: Dispatch<FilterDataType[]>,
    itemId: number,
  ) => {
    if (itemId !== 1) {
      setCurrentData(
        currentData.map((data) => {
          if (data.id === 1) {
            return {
              ...data,
              checked: false,
            };
          } else if (itemId === data.id) {
            return {
              ...data,
              checked: !data.checked,
            };
          } else {
            return data;
          }
        }),
      );
    } else {
      setCurrentData(
        currentData.map((data) => {
          if (data.id === 1) {
            return {
              ...data,
              checked: !data.checked,
            };
          } else {
            return {
              ...data,
              checked: false,
            };
          }
        }),
      );
    }
  };

  return (
    <>
      <div
        className={
          props.openFilterBlock
            ? s.filterBlock + " " + s.filterBlockOpen
            : s.filterBlock
        }
      >
        {props.openFilterBlock && (
          <div
            className={s.close}
            onClick={() => {
              props.setOpenFilterBlock(false);
            }}
          >
            <IoMdArrowRoundBack size={28} />
          </div>
        )}

        <ul>
          {props.currentFilterData.map((data: FilterDataType) => {
            return (
              <li key={data.name}>
                <span
                  onClick={() =>
                    changeChecked(
                      props.currentFilterData,
                      props.setCurrentFilterData,
                      data.id,
                    )
                  }
                >
                  {data.name}
                </span>
                {data.checked && (
                  <label>
                    <BiCheckCircle color="5bb450" size={24} />
                  </label>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

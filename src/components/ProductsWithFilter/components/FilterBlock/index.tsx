import React, { Dispatch, FC, useEffect } from "react";
import s from "./FilterBlock.module.scss";

import { FilterDataType } from "../../../../types/FilterDataType";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FilterBlockPropsType } from "./FilterBlockPropsType";
import { BiCheckCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export const FilterBlock: FC<FilterBlockPropsType> = (
  props: FilterBlockPropsType,
) => {
  const { t } = useTranslation();
  const checkFilterData = (
    currentData: FilterDataType[],
    setCurrentData: Dispatch<FilterDataType[]>,
  ) => {
    const checkFilterData = currentData.filter((data) => {
      return data.checked;
    });
    if (checkFilterData.length === 0) {
      setCurrentData(
        currentData.map((data) => {
          if (data.id === 1) {
            return {
              ...data,
              checked: true,
            };
          } else {
            return data;
          }
        }),
      );
    }
  };
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
  useEffect(() => {
    checkFilterData(props.currentFilterData, props.setCurrentFilterData);
  }, [props.currentFilterData]);
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
              <li
                key={data.name}
                className={data.id === 1 && data.checked ? s.disable : ""}
              >
                <span
                  onClick={() => {
                    if (data.id === 1 && data.checked) {
                      return false;
                    } else {
                      changeChecked(
                        props.currentFilterData,
                        props.setCurrentFilterData,
                        data.id,
                      );
                    }
                  }}
                >
                  {data.id === 1 ? t(data.name) : data.name}
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

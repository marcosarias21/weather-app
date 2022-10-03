/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
export const weekDayTemperature = (data) => {
  console.log(data);
  const weekDayValues = [];
  let dayValues = [[], []];
  let minMaxValues = { minTemp: 0, maxTemp: 0, iconCode: 0 };
  for (let i = 0; i < data.list.length; i++) {
    const { temp_min, temp_max } = data.list[i].main;
    if (dayValues[0].length < 8) {
      dayValues[0].push(temp_min);
      dayValues[1].push(temp_max);
    } else {
      minMaxValues = {
        date: data.list[i].dt_txt,
        minTemp: Math.min(...dayValues[0]),
        maxTemp: Math.max(...dayValues[1]),
        iconCode: data.list[i].weather[0].icon,
      };
      weekDayValues.push(minMaxValues);
      dayValues = [[], []];
      dayValues[0].push(temp_min);
      dayValues[1].push(temp_max);
    }
  }
  return weekDayValues;
};

import React from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import Modal from 'react-native-modal'
import {Text, View} from 'react-native'
import {Arrow} from './Arrow'
import dayjs from 'dayjs'

import {LocaleConfig} from 'react-native-calendars'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  dayNames: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня',
}
LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Nociembre',
    'Diciembre',
  ],
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ],
  dayNamesShort: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  today: 'Hoy es',
}
LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  today: 'Today',
}

const CalendarCustom = ({
  isModalVisible,
  toggleModal,
  onDayPress,
  selectedDate,
}) => {
  const {i18n} = useTranslation()
  LocaleConfig.defaultLocale = i18n.language
  const theme = useSelector((state) => state.theme)
  const notes = useSelector((state) => state.notes).filter((i) => i.status)
  const markedDates = notes.reduce((acc, item) => {
    if (Object.keys(acc).includes(item.date)) {
      return acc
    } else {
      return {...acc, [item.date]: {marked: true, selectedDotColor: 'blue'}}
    }
  }, {})
  return (
    <View>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <Calendar
          renderArrow={(direction) => <Arrow direction={direction} />}
          markedDates={{
            ...markedDates,
            [dayjs(selectedDate).format('YYYY-MM-DD')]: {
              selected: true,
            },
          }}
          theme={{
            backgroundColor: theme ? '#ffffff' : 'black',
            calendarBackground: theme ? '#ffffff' : 'black',
            textSectionTitleColor: theme ? '#898989' : '#999999',

            selectedDayBackgroundColor: theme ? 'black' : 'white',
            selectedDayTextColor: theme ? '#ffffff' : 'black',
            todayTextColor: theme ? '#898989' : '#999999',
            // todayBackgroundColor: theme ? 'black' : 'white',
            dayTextColor: theme ? 'black' : 'white',
            textDisabledColor: theme ? '#d9d9d9' : '#d9d9d980',

            monthTextColor: theme ? 'black' : 'white',

            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          firstDay={1}
          onDayPress={(date) => {
            onDayPress(new Date(date.timestamp))
          }}
        />
      </Modal>
    </View>
  )
}

export {CalendarCustom}

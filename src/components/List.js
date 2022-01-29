import React from 'react'
import {SectionList, View, Text, StyleSheet} from 'react-native'
import {Item} from './Item'
import dayjs from 'dayjs'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'

const List = ({selectedDate, showEditModal, setSelectedNote}) => {
  const theme = useSelector((state) => state.theme)
  const {i18n, t} = useTranslation()
  const notes = useSelector((state) =>
    state.notes.filter(
      (i) => i.date === dayjs(selectedDate).format('YYYY-MM-DD'),
    ),
  )
  const toDo = notes.filter((item) => item.status)
  const done = notes.filter((item) => !item.status)
  const data = [
    {
      title: t('TO_DO'),
      data: toDo,
    },
    {
      title: t('DONE'),
      data: done,
    },
  ]
  return (
    <View style={styles.sectionContainer}>
      <SectionList
        sections={data}
        renderItem={({item}) => (
          <Item
            note={item}
            showEditModal={showEditModal}
            setSelectedNote={setSelectedNote}
          />
        )}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({section: {title, data}}) =>
          data.length !== 0 && (
            <Text
              style={
                theme
                  ? styles.title
                  : [styles.title, {color: 'white', backgroundColor: 'black'}]
              }>
              {title}
            </Text>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    backgroundColor: 'white',
  },
})

export {List}

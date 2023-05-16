import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { firebase } from '../../../config';

const ToDo = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState({});
    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteContent, setNewNoteContent] = useState('');
    const user = firebase.auth().currentUser;

    const fetchNotes = async () => {
        const notesRef = firebase.firestore().collection('');
        const snapshot = await notesRef.where('userId', '==', user.uid).get();
        const notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotes(notes);
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleNotePress = note => {
        setSelectedNote(note);
        setNewNoteTitle(note.title);
        setNewNoteContent(note.content);
    }

    const handleNoteDelete = async id => {
        await firebase.firestore().collection('FitliooToDo').doc(id).delete();
        setNotes(notes.filter(note => note.id !== id));
        setSelectedNote({});
        setNewNoteTitle('');
        setNewNoteContent('');
    }

    const handleDeleteAllNotes = async () => {
        const batch = firebase.firestore().batch();
        notes.forEach(note => {
            const noteRef = firebase.firestore().collection('FitliooToDo').doc(note.id);
            batch.delete(noteRef);
        });
        await batch.commit();
        setNotes([]);
        setSelectedNote({});
        setNewNoteTitle('');
        setNewNoteContent('');
    }

    const handleNoteSave = async () => {
        if (selectedNote.id) {
            await firebase.firestore().collection('FitliooToDo').doc(selectedNote.id).update({
                title: newNoteTitle,
                content: newNoteContent
            });
            setNotes(notes.map(note => note.id === selectedNote.id ? { ...note, title: newNoteTitle, content: newNoteContent } : note));
            setSelectedNote({});
            setNewNoteTitle('');
            setNewNoteContent('');
        } else {
            const newNote = {
                title: newNoteTitle,
                content: newNoteContent,
                userId: user.uid,
                createdAt: new Date().toISOString(),
            }
            const docRef = await firebase.firestore().collection('FitliooToDo').add(newNote);
            setNotes([...notes, { id: docRef.id, ...newNote }]);
            setNewNoteTitle('');
            setNewNoteContent('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.baslik}>NOTLARIM</Text>

            <FlatList
                style={{ flex: 1 }}
                data={notes}
                keyExtractor={note => note.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleNotePress(item)}>
                        <View style={{
                            backgroundColor: selectedNote.id === item.id ? '#ababab' : '#ababab', padding: 16, borderRadius: 20, marginTop: 10
                        }}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                )}
            />

            <View style={{ padding: 16 }}>
                <TextInput
                    style={styles.noteTitle}
                    placeholder="Baþlýk"
                    value={newNoteTitle}
                    onChangeText={text => setNewNoteTitle(text)}
                />
                <TextInput style={styles.noteContent}
                    placeholder="Not"
                    multiline={true}
                    value={newNoteContent}
                    onChangeText={text => setNewNoteContent(text)}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleNoteSave}
                >
                    <Text style={styles.addButtonText}>{selectedNote.id ? 'KAYDET' : 'EKLE'}</Text>
                </TouchableOpacity>
                {selectedNote.id && (
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => handleNoteDelete(selectedNote.id)}
                    >
                        <Text style={styles.deleteButtonText}>SÝL</Text>
                    </TouchableOpacity>
                )}
                {!!notes.length && (
                    <TouchableOpacity
                        style={{ backgroundColor: 'red', padding: 10, alignItems: 'center', marginTop: 10, borderRadius: 20 }}
                        onPress={handleDeleteAllNotes}
                    >
                        <Text style={{ color: '#fff' }}>HEPSÝNÝ SÝL</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 20,
    },
    baslik: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        textAlign: 'center',
        borderRadius: 24,
        fontWeight: 'bold',
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        borderRadius: 20,
    },
    noteContent: {
        fontSize: 16,
        marginBottom: 16,
        lineHeight: 24,
        borderRadius: 20,
    },
    addButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 20,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});
export default ToDo;

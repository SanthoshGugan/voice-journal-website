import axios from "axios";
import { BASE_URL } from "./url";
import Journal from "../model/Journal";

const journalUrl = `${BASE_URL}/journal`;

export const createJournal =async (journal: Journal) => axios.post(`${journalUrl}/`, {...journal});

export const getJournal = async (id: number) => axios.get(`${journalUrl}/${id}`);

export const postJournalAudioApi = async (audioFile: File) => {
    const formData: FormData = new FormData();
    formData.append('audio', audioFile);


    const headers = {
        'Content-Type': 'audio/mp3',
        'Content-Disposition': 'attachment; filename="audiofile.mp3"',
      };
    return axios.post(`${journalUrl}/upload`, formData, { headers })
};


export const downloadJournalAudio = async (journal_id: number) => axios.get(`${journalUrl}/download/journal_id`);

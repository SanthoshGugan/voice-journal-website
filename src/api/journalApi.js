import axios from "axios";
import { BASE_URL } from "./url";
import Journal from "../model/Journal";

const journalUrl = `${BASE_URL}/journal`;

export const createJournalApi =async (journal) => axios.post(`${journalUrl}/`, {...journal});

export const getJournalApi = async (id) => axios.get(`${journalUrl}/${id}`);

export const postJournalAudioApi = async (audioFile) => {
    const formData = new FormData();
    formData.append('audio', audioFile);


    const headers = {
        'Content-Type': 'audio/mp3',
        'Content-Disposition': 'attachment; filename="audiofile.mp3"',
      };
    return axios.post(`${journalUrl}/upload`, formData, { headers })
};


export const downloadJournalAudioApi = async (journal_id) => axios.get(`${journalUrl}/download/journal_id`);

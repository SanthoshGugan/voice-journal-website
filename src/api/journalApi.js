import axios from "axios";
import { BASE_URL } from "./url";

const journalUrl = `${BASE_URL}/journal`;

export const createJournalApi =async (journal) => axios.post(`${journalUrl}/`, {...journal});

export const getJournalApi = async (id) => axios.get(`${journalUrl}/${id}`);

export const postJournalAudioApi = async ({audioFile, filename, journal_id }) => {
    const headers = {
        'Content-Type': 'audio/mp3',
        'Content-Disposition': `attachment; filename="${filename}.mp3"`,
        'Journal-Id': journal_id
      };
    return axios.post(`${journalUrl}/upload`, audioFile, { headers })
};


export const downloadJournalAudioApi = async (journal_id) => axios.get(`${journalUrl}/download/journal_id`);

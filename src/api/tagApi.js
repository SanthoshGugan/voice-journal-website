import axios from "axios";
import { BASE_URL } from "./url";
import { Tags } from "../model/Tag";
import AddTagToJournal from "../model/AddTagToJournal";

const tagUrl = `${BASE_URL}/tags`;

export const postTagApi = async (tag) => axios.post(`${tagUrl}`, { ...tag });

export const getTagApi = async (id) => axios.get(`${tagUrl}/${id}`);

export const addTagToJournalApi = async (addTagToJournal) => axios.post(`${tagUrl}/journal`, { ... addTagToJournal});

export const getJournalByTagNameApi = async (tag_name) => axios.get(`${tagUrl}/${tag_name}/journal`);    

export const getTagsForJournal = async (journal_id) => axios.get(`${tagUrl}/journal/${journal_id}`);
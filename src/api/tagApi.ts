import axios from "axios";
import { BASE_URL } from "./url";
import { Tags } from "../model/Tag";
import AddTagToJournal from "../model/AddTagToJournal";

const tagUrl = `${BASE_URL}/tags`;

export const postTag = async (tag: Tags) => axios.post(`${tagUrl}`, { ...tag });

export const getTag = async (id: number) => axios.get(`${tagUrl}/${id}`);

export const addTagToJournal = async (addTagToJournal: AddTagToJournal) => axios.post(`${tagUrl}/journal`, { ... addTagToJournal});

export const getTagsForJournal = async (tag_name: string) => axios.get(`${tagUrl}/${tag_name}/journal`);    
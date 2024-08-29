import type resume from "../assets/resume.json";

export type Job = typeof resume["work"][0];
export type Education = typeof resume["education"][0];

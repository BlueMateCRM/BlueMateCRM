import { defineStore } from "pinia";
import axios from "../../api/axios.ts";
import { Email } from "../../models/attachments.model.ts";

export type State = {
  leads: {
    data: Email[];
    loading: boolean;
    error: any;
    totalPages: number;
    currentPage: number;
  };
  details: {
    data: any;
    loading: boolean;
    error: any;
  };
};

export const useLeadStore = defineStore("email", {
  state: () =>
    ({
      leads: {
        data: [],
        loading: false,
        error: null,
        totalPages: 0,
        currentPage: 0,
      },
      details: {
        data: {},
        loading: false,
        error: null,
      },
    } as State),
  actions: {
    // GET all data for table
    async getAllLeads(id: number, size: number) {
      try {
        this.leads.loading = true;
        const res: any = await axios.get(
          `/api/attachments/?email=${id}&pageSize=${size}`
        );
        this.leads.data = res.data.data;
        this.leads.totalPages = res.data?.totalPages;
        this.leads.currentPage = res.data?.currentPage;
      } catch (error: any) {
        this.leads.error = error;
      } finally {
        this.leads.loading = false;
      }
    },
  },
  getters: {},
});

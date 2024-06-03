const allJobRoleSchema = {
  type: "object",
  properties: {
    status: {
      type: "number",
    },
    message: {
      type: "null",
    },
    data: {
      type: "object",
      properties: {
        recordCount: {
          type: "number",
        },
        pageNumber: {
          type: "number",
        },
        pagesAvailable: {
          type: "number",
        },
        pageSize: {
          type: "number",
        },
        firstIndex: {
          type: "number",
        },
        lastIndex: {
          type: "number",
        },
        items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "number",
              },
              name: {
                type: "string",
              },
              htag: {
                type: "number",
              },
            },
            required: ["id", "name", "htag"],
          },
        },
      },
      required: [
        "recordCount",
        "pageNumber",
        "pagesAvailable",
        "pageSize",
        "firstIndex",
        "lastIndex",
        "items",
      ],
    },
  },
  required: ["status", "message", "data"],
};

export { allJobRoleSchema };

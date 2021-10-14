var MessageModel = module.exports = {
    Message: {
        event_type: { type: "string" },
        content_type: { type: "number", defaultValue:0 },
        device_type: { type: "number" },
        device_id: { type: "number" },
        from: { type: "string" },
        message: { type: "string" },
        to: { type: "object" },
        topic: { type: "string" },
        topic_context: { type: "string" },
        content: { type: "string" },
        event_start_date: { type: "date" },
        event_end_date: { type: "date" },
        event_status: { type: "string" },
    },
    user:{
        user_type : { type: "number" },
        userid : { type: "number" },
        channel : { type: "number" },
        message_status : { type: "number" }
    },
    to:{
        user: { type: "object" }
    },
    attachments:{
        attachment_type : { type: "number" },
        attachment_title : { type: "number" },
        attachment_key : { type: "number" }
    },
    content :{
        attachments:{type:"array"}
    }
}

import React from "react";
import { Avatar, Checkbox, Layout } from "antd";
const { Content} = Layout;
// import { Dropdown } from "antd";

const CardComp: React.FC = () => {
  return (
    <Content 
        style={{ 
            padding: "5px 50px",
            height: "calc(100vh - 270px)",
            overflowY: "scroll"                
    }}>
        <div
            className="site-layout-content"
            style={{
            display: "flex",
            alignSelf: "stretch",
            justifyContent: "space-between",
            }}
        >
            <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                width: "auto",
                gap: "32px",
                alignItems: "center",
            }}
            >
            <Checkbox />
            <p
                style={{
                color: "#1D4ED8",
                fontWeight: "600",
                lineHeight: "22px",
                fontSize: "14px",
                }}
            >
                247 candidates
            </p>
            </div>
            <div
            style={{
                display: "flex",
                alignSelf: "stretch",
                width: "auto",
                gap: "16px",
                alignItems: "center",
            }}
            >
            <div
                style={{ display: "flex", color: "#1D4ED8", fontWeight: "500" }}
            >
                Qualified
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <p>Task</p>
                <p
                style={{
                    fontWeight: "400",
                    fontSize: "10px",
                    textAlign: "center",
                    lineHeight: "22px",
                    padding: "3px 6px",
                    borderRadius: "40px",
                    background: "#F7F8FD",
                }}
                >
                25
                </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <p>Disqualified</p>
                <p
                style={{
                    fontWeight: "400",
                    fontSize: "10px",
                    textAlign: "center",
                    lineHeight: "22px",
                    padding: "3px 6px",
                    borderRadius: "40px",
                    background: "#F7F8FD",
                }}
                >
                78
                </p>
            </div>
            </div>
        </div>
        <div 
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            }}
        >
            <div 
                style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 16px 0 0x",
                            
            }}>
                <Checkbox />
            </div>
                <div 
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    margin: "0 50px 0 10px",                            
                }}>
                    <Avatar
                    style={{ 
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 0px 0 25px",  
                        scale:"2"                          
                    }}/>
                </div>
            <div
            style={{ width: 500,
                display: "flex",
                flexDirection: "column",
                margin: "0 10px",                            
            }}>
                <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 20px", 
                        border: "none",                           
                }}>
                    <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 20px",                            
                    }}>
                        <p  
                        style={{ width: 250,
                                fontSize:"20px",  
                                fontWeight:"bold"                              
                        }}>
                            Aaliyah Sanderson
                        </p>
                        <p
                        style={{ width: 250,
                                fontSize:"15px",  
                                fontWeight:"bold"                              
                        }}>Riyadh, Saudi Arabia</p>
                        <p>Bachelor - Cambridge University (2023 - 2023)</p>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                color:"blue"
                                
                        }}>
                            <p>#top_candidate</p>
                            <p>#top_candidate</p>
                        </div>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                
                        }}>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                New York
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                Marketing
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                London
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            }}
        >
            <div 
                style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 16px 0 0x",
                            
            }}>
                <Checkbox />
            </div>
                <div 
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    margin: "0 50px 0 10px",                            
                }}>
                    <Avatar
                    style={{ 
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 0px 0 25px",  
                        scale:"2"                          
                    }}/>
                </div>
            <div
            style={{ width: 500,
                display: "flex",
                flexDirection: "column",
                margin: "0 10px",                            
            }}>
                <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 20px", 
                        border: "none",                           
                }}>
                    <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 20px",                            
                    }}>
                        <p  
                        style={{ width: 250,
                                fontSize:"20px",  
                                fontWeight:"bold"                              
                        }}>
                            Aaliyah Sanderson
                        </p>
                        <p
                        style={{ width: 250,
                                fontSize:"15px",  
                                fontWeight:"bold"                              
                        }}>Riyadh, Saudi Arabia</p>
                        <p>Bachelor - Cambridge University (2023 - 2023)</p>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                color:"blue"
                                
                        }}>
                            <p>#top_candidate</p>
                            <p>#top_candidate</p>
                        </div>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                
                        }}>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                New York
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                Marketing
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                London
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            }}
        >
            <div 
                style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 16px 0 0x",
                            
            }}>
                <Checkbox />
            </div>
                <div 
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    margin: "0 50px 0 10px",                            
                }}>
                    <Avatar
                    style={{ 
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 0px 0 25px",  
                        scale:"2"                          
                    }}/>
                </div>
            <div
            style={{ width: 500,
                display: "flex",
                flexDirection: "column",
                margin: "0 10px",                            
            }}>
                <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 20px", 
                        border: "none",                           
                }}>
                    <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 20px",                            
                    }}>
                        <p  
                        style={{ width: 250,
                                fontSize:"20px",  
                                fontWeight:"bold"                              
                        }}>
                            Aaliyah Sanderson
                        </p>
                        <p
                        style={{ width: 250,
                                fontSize:"15px",  
                                fontWeight:"bold"                              
                        }}>Riyadh, Saudi Arabia</p>
                        <p>Bachelor - Cambridge University (2023 - 2023)</p>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                color:"blue"
                                
                        }}>
                            <p>#top_candidate</p>
                            <p>#top_candidate</p>
                        </div>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                
                        }}>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                New York
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                Marketing
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                London
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            }}
        >
            <div 
                style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 16px 0 0x",
                            
            }}>
                <Checkbox />
            </div>
                <div 
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    margin: "0 50px 0 10px",                            
                }}>
                    <Avatar
                    style={{ 
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 0px 0 25px",  
                        scale:"2"                          
                    }}/>
                </div>
            <div
            style={{ width: 500,
                display: "flex",
                flexDirection: "column",
                margin: "0 10px",                            
            }}>
                <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 20px", 
                        border: "none",                           
                }}>
                    <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 20px",                            
                    }}>
                        <p  
                        style={{ width: 250,
                                fontSize:"20px",  
                                fontWeight:"bold"                              
                        }}>
                            Aaliyah Sanderson
                        </p>
                        <p
                        style={{ width: 250,
                                fontSize:"15px",  
                                fontWeight:"bold"                              
                        }}>Riyadh, Saudi Arabia</p>
                        <p>Bachelor - Cambridge University (2023 - 2023)</p>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                color:"blue"
                                
                        }}>
                            <p>#top_candidate</p>
                            <p>#top_candidate</p>
                        </div>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                
                        }}>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                New York
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                Marketing
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                London
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            }}
        >
            <div 
                style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 16px 0 0x",
                            
            }}>
                <Checkbox />
            </div>
                <div 
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    margin: "0 50px 0 10px",                            
                }}>
                    <Avatar
                    style={{ 
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 0px 0 25px",  
                        scale:"2"                          
                    }}/>
                </div>
            <div
            style={{ width: 500,
                display: "flex",
                flexDirection: "column",
                margin: "0 10px",                            
            }}>
                <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 20px", 
                        border: "none",                           
                }}>
                    <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 20px",                            
                    }}>
                        <p  
                        style={{ width: 250,
                                fontSize:"20px",  
                                fontWeight:"bold"                              
                        }}>
                            Aaliyah Sanderson
                        </p>
                        <p
                        style={{ width: 250,
                                fontSize:"15px",  
                                fontWeight:"bold"                              
                        }}>Riyadh, Saudi Arabia</p>
                        <p>Bachelor - Cambridge University (2023 - 2023)</p>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                color:"blue"
                                
                        }}>
                            <p>#top_candidate</p>
                            <p>#top_candidate</p>
                        </div>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                
                        }}>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                New York
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                Marketing
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                London
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            }}
        >
            <div 
                style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 16px 0 0x",
                            
            }}>
                <Checkbox />
            </div>
                <div 
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    margin: "0 50px 0 10px",                            
                }}>
                    <Avatar
                    style={{ 
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 0px 0 25px",  
                        scale:"2"                          
                    }}/>
                </div>
            <div
            style={{ width: 500,
                display: "flex",
                flexDirection: "column",
                margin: "0 10px",                            
            }}>
                <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 20px", 
                        border: "none",                           
                }}>
                    <div 
                    style={{ width: 500,
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 20px",                            
                    }}>
                        <p  
                        style={{ width: 250,
                                fontSize:"20px",  
                                fontWeight:"bold"                              
                        }}>
                            Aaliyah Sanderson
                        </p>
                        <p
                        style={{ width: 250,
                                fontSize:"15px",  
                                fontWeight:"bold"                              
                        }}>Riyadh, Saudi Arabia</p>
                        <p>Bachelor - Cambridge University (2023 - 2023)</p>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                color:"blue"
                                
                        }}>
                            <p>#top_candidate</p>
                            <p>#top_candidate</p>
                        </div>
                        <div  
                        style={{ width: 250,
                                display: "flex",
                                flexDirection: "row",
                                margin: "0 10px",
                                justifyContent: "space-around",
                                
                        }}>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                New York
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                Marketing
                            </p>
                            <p
                            style={{ 
                                    padding: "0 10px",
                                    borderRadius: "10px",
                                    color: "#007a78",
                                    backgroundColor: "#c4fff7",
                                    
                            }}>
                                London
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Content>   
  );
};

export default CardComp;

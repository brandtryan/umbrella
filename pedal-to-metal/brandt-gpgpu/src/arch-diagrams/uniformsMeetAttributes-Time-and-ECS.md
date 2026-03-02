```mermaid
graph TD
    %% ---------------------------------------------------------
    %% STYLES
    %% ---------------------------------------------------------
    classDef storage fill:#fff9c4,stroke:#000,stroke-width:2px;
    classDef uniform fill:#e1be,stroke:#fff,stroke-width:2px; %% Purple for Uniforms
    classDef logic fill:#e1ffe,stroke:#0277bd,stroke-width:2px;
    classDef stream fill:#fff,stroke:#fb8c00,stroke-width:2px;

    %% ---------------------------------------------------------
    %% INPUTS
    %% ---------------------------------------------------------
    RAF_Stream((rafEngine)):::stream

    subgraph L2 [Layer 2: The Particles]
        AnchoredPos[anchored-position]:::storage
    end

    %% ---------------------------------------------------------
    %% LAYER 3: The GPGPU Step
    %% ---------------------------------------------------------
    subgraph L3 [Layer 3: The Environment]
        direction TB

        %% Extracting inputs from RAF
        Time_Uniform[u_time</br>Animation Clock]:::uniform
        Delta_Uniform[u_dt</br>Integration Step]:::uniform

        RAF_Stream -->|timestamp| Time_Uniform
        RAF_Stream -->|delta| Delta_Uniform

        %% The FBO / Shader
        subgraph FBO [FBO / Simulation Shader]
            Noise_Func[[Fractal Brownian Noise</br>noise*pos + u_time*]]:::logic
            Physics_Func[[Verlet Integrator]]:::logic
        end

        %% Flow
        AnchoredPos -->|Input: Attribute| Noise_Func
        Time_Uniform -->|Input: Uniform| Noise_Func

        Noise_Func -->|Force Vector| Physics_Func
        Delta_Uniform -->|Step| Physics_Func
    end

    %% Output
    Physics_Func -->|Write| Output_Texture[Next State Texture]:::storage

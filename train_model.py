import pandas as pd
import pickle
import networkx as nx
import matplotlib.pyplot as plt

from pgmpy.models import DiscreteBayesianNetwork
from pgmpy.estimators import MaximumLikelihoodEstimator

# load dataset
data = pd.read_csv("dataset/network_data.csv")

# define network structure
model = DiscreteBayesianNetwork([
    ('CPU', 'Fault'),
    ('Latency', 'Fault'),
    ('PacketLoss', 'Fault'),
    ('Bandwidth', 'Fault')
])

# train model
model.fit(data, estimator=MaximumLikelihoodEstimator)

# save trained model
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model trained successfully")

# visualize Bayesian network
G = nx.DiGraph()
G.add_edges_from(model.edges())

plt.figure(figsize=(6,4))
pos = nx.spring_layout(G)

nx.draw(
    G,
    pos,
    with_labels=True,
    node_size=3000,
    node_color="lightblue",
    font_size=10,
    font_weight="bold",
    arrows=True
)

plt.title("AI Network Fault Prediction Model")
plt.show()